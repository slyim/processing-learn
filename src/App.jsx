import { useState, useEffect, useRef, useMemo, useCallback } from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { java } from '@codemirror/lang-java';
import { syntaxHighlighting } from '@codemirror/language';
import { oneDarkHighlightStyle } from '@codemirror/theme-one-dark';
import { EditorView } from '@codemirror/view';
import { sketches, sectionIcons } from './sketches';
import { translations, languages, modules, sectionNumber } from './i18n';
import { transpile, P5_HOOKS } from './transpile';
import { themes } from './theme';

const PLAYGROUND_STORAGE_KEY = 'playground-code';
const TABS_STORAGE_KEY = 'studio-tabs';
const SPLIT_STORAGE_KEY = 'studio-split';
const DEFAULT_TABS = { ids: ['playground'], active: 'playground' };

// Read persisted tab state (which tabs were open, which was focused).
// Invalid IDs and malformed JSON fall back to playground-only.
function loadTabs() {
  try {
    const raw = localStorage.getItem(TABS_STORAGE_KEY);
    if (!raw) return DEFAULT_TABS;
    const parsed = JSON.parse(raw);
    if (!parsed || !Array.isArray(parsed.ids)) return DEFAULT_TABS;
    const ids = parsed.ids.filter(id => id === 'playground' || id in sketches);
    if (ids.length === 0) return DEFAULT_TABS;
    const active = typeof parsed.active === 'string' && ids.includes(parsed.active)
      ? parsed.active
      : ids[0];
    return { ids, active };
  } catch {
    return DEFAULT_TABS;
  }
}

function loadSplit() {
  const n = parseFloat(localStorage.getItem(SPLIT_STORAGE_KEY));
  return Number.isFinite(n) && n >= 0.2 && n <= 0.8 ? n : 0.5;
}

function initialCodeFor(id) {
  if (id === 'playground') {
    return localStorage.getItem(PLAYGROUND_STORAGE_KEY) || sketches.playground;
  }
  return sketches[id] || '';
}

export default function ProcessingStudio() {
  const [lang, setLang] = useState(() => localStorage.getItem('lang') || 'en');
  const [themeName, setThemeName] = useState(() => localStorage.getItem('theme') || 'dark');
  const [tabs, setTabs] = useState(loadTabs);
  const [buffers, setBuffers] = useState(() => {
    const initial = loadTabs();
    const b = {};
    for (const id of initial.ids) b[id] = initialCodeFor(id);
    return b;
  });
  const [editorFrac, setEditorFrac] = useState(loadSplit);
  const [error, setError] = useState(null);
  const canvasRef = useRef(null);
  const p5Instance = useRef(null);
  const fileInputRef = useRef(null);
  const mainRef = useRef(null);

  const t = translations[lang];
  const c = themes[themeName];
  const activeTabId = tabs.active;
  const code = buffers[activeTabId] ?? initialCodeFor(activeTabId);
  const isPlayground = activeTabId === 'playground';
  const lesson = t.lessons[activeTabId];
  const sectionNum = sectionNumber(activeTabId);
  const currentModule = useMemo(
    () => modules.find(m => m.sectionIds.includes(activeTabId)),
    [activeTabId]
  );

  useEffect(() => { localStorage.setItem('lang', lang); }, [lang]);
  useEffect(() => { localStorage.setItem('theme', themeName); }, [themeName]);
  useEffect(() => { localStorage.setItem(TABS_STORAGE_KEY, JSON.stringify(tabs)); }, [tabs]);
  useEffect(() => { localStorage.setItem(SPLIT_STORAGE_KEY, String(editorFrac)); }, [editorFrac]);

  useEffect(() => {
    const prev = document.body.style.background;
    document.body.style.background = c.bg;
    return () => { document.body.style.background = prev; };
  }, [c.bg]);

  const openTab = useCallback((id) => {
    setTabs(prev => ({
      ids: prev.ids.includes(id) ? prev.ids : [...prev.ids, id],
      active: id
    }));
    setBuffers(prev => id in prev ? prev : { ...prev, [id]: initialCodeFor(id) });
  }, []);

  const focusTab = useCallback((id) => {
    setTabs(prev => prev.active === id ? prev : { ...prev, active: id });
  }, []);

  const closeTab = useCallback((id) => {
    setTabs(prev => {
      if (prev.ids.length <= 1) return prev;
      const idx = prev.ids.indexOf(id);
      if (idx === -1) return prev;
      const ids = prev.ids.filter(x => x !== id);
      const active = prev.active === id
        ? ids[Math.min(idx, ids.length - 1)]
        : prev.active;
      return { ids, active };
    });
    setBuffers(prev => {
      if (!(id in prev)) return prev;
      // Keep the playground buffer even if tab is closed; other tabs can be dropped.
      if (id === 'playground') return prev;
      const { [id]: _, ...rest } = prev;
      return rest;
    });
  }, []);

  const onCodeChange = useCallback((v) => {
    setBuffers(prev => ({ ...prev, [activeTabId]: v }));
    if (activeTabId === 'playground') {
      localStorage.setItem(PLAYGROUND_STORAGE_KEY, v);
    }
  }, [activeTabId]);

  const runSketch = useCallback(() => {
    setError(null);
    if (p5Instance.current) {
      p5Instance.current.remove();
      p5Instance.current = null;
    }
    if (!window.p5 || !canvasRef.current) return;
    try {
      const jsCode = transpile(code);
      let wrapped = jsCode;
      for (const h of P5_HOOKS) {
        wrapped = wrapped.replace(
          new RegExp(`function\\s+${h}\\s*\\(`, 'g'),
          `p.${h} = function(`
        );
      }
      p5Instance.current = new window.p5((p) => {
        new Function('p', `with (p) { ${wrapped} }`)(p);
      }, canvasRef.current);
    } catch (err) {
      console.error('Sketch error:', err);
      setError(err.message);
    }
  }, [code]);

  useEffect(() => {
    const timer = setTimeout(runSketch, 150);
    return () => clearTimeout(timer);
  }, [runSketch]);

  useEffect(() => {
    return () => {
      if (p5Instance.current) p5Instance.current.remove();
    };
  }, []);

  const editorExtensions = useMemo(() => {
    const selectionBg = themeName === 'dark'
      ? 'rgba(255, 122, 26, 0.28)'
      : 'rgba(217, 90, 0, 0.22)';

    // Custom neutral-dark theme — NOT built on oneDark.
    // We keep oneDark's syntax colors (via oneDarkHighlightStyle) but flatten
    // the editor chrome to our #141414 background so it matches the rest of
    // the dark theme instead of the default #282c34 blue-gray.
    const darkEditor = EditorView.theme({
      '&': { backgroundColor: c.editorBg, color: c.text, height: '100%' },
      '.cm-scroller': {
        backgroundColor: c.editorBg,
        fontFamily: "'Fira Code', 'Courier New', ui-monospace, monospace"
      },
      '.cm-content': { caretColor: c.accent, backgroundColor: c.editorBg },
      '.cm-gutters': {
        backgroundColor: c.panelAlt, color: c.textDim,
        border: 'none', borderRight: `1px solid ${c.border}`
      },
      '.cm-lineNumbers .cm-gutterElement': { color: c.textDim },
      '.cm-activeLine': { backgroundColor: c.accentSoft },
      '.cm-activeLineGutter': { backgroundColor: c.accentSoft, color: c.accent },
      '.cm-cursor, .cm-dropCursor': { borderLeftColor: c.accent },
      '&.cm-focused .cm-selectionBackground, ::selection, .cm-selectionBackground': {
        backgroundColor: selectionBg
      },
      '.cm-selectionMatch': { backgroundColor: c.accentSoft },
      '.cm-matchingBracket, .cm-nonmatchingBracket': {
        backgroundColor: c.accentSoft, color: c.accent, outline: 'none'
      },
      '.cm-foldPlaceholder': {
        backgroundColor: c.panel, color: c.textDim, border: 'none'
      },
      '.cm-panels': { backgroundColor: c.panel, color: c.text },
      '.cm-tooltip': {
        backgroundColor: c.panel, color: c.text, border: `1px solid ${c.border}`
      },
      '.cm-tooltip-autocomplete > ul > li[aria-selected]': {
        backgroundColor: c.accentSoft, color: c.accent
      }
    }, { dark: true });

    const lightEditor = EditorView.theme({
      '&': { backgroundColor: c.panel, color: c.text, height: '100%' },
      '.cm-scroller': {
        backgroundColor: c.panel,
        fontFamily: "'Fira Code', 'Courier New', ui-monospace, monospace"
      },
      '.cm-content': { caretColor: c.accent, backgroundColor: c.panel },
      '.cm-gutters': {
        backgroundColor: c.bg, color: c.textDim,
        border: 'none', borderRight: `1px solid ${c.border}`
      },
      '.cm-activeLine': { backgroundColor: c.accentSoft },
      '.cm-activeLineGutter': { backgroundColor: c.accentSoft, color: c.accent },
      '.cm-cursor, .cm-dropCursor': { borderLeftColor: c.accent },
      '&.cm-focused .cm-selectionBackground, ::selection, .cm-selectionBackground': {
        backgroundColor: selectionBg
      }
    });

    const base = [java(), EditorView.lineWrapping];
    return themeName === 'dark'
      ? [...base, syntaxHighlighting(oneDarkHighlightStyle), darkEditor]
      : [...base, lightEditor];
  }, [themeName, c]);

  const pillBtn = (active) => ({
    background: active ? c.accentSoft : 'transparent',
    border: `1px solid ${active ? c.accent : c.border}`,
    color: active ? c.accent : c.textMuted,
    padding: '0.3rem 0.55rem', cursor: 'pointer', borderRadius: '4px',
    fontSize: '0.72rem', fontFamily: 'inherit',
    fontWeight: active ? 'bold' : 'normal',
    '--hover-bg': c.accentSoft
  });

  const downloadSketch = () => {
    const slug = activeTabId || 'sketch';
    const blob = new Blob([code], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${slug}.pde`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const uploadSketch = (e) => {
    const file = e.target.files && e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      const text = String(reader.result || '');
      localStorage.setItem(PLAYGROUND_STORAGE_KEY, text);
      setBuffers(prev => ({ ...prev, playground: text }));
      setTabs(prev => ({
        ids: prev.ids.includes('playground') ? prev.ids : ['playground', ...prev.ids],
        active: 'playground'
      }));
    };
    reader.readAsText(file);
    e.target.value = '';
  };

  const resetCurrent = () => {
    if (isPlayground) {
      localStorage.removeItem(PLAYGROUND_STORAGE_KEY);
      setBuffers(prev => ({ ...prev, playground: sketches.playground }));
    } else {
      setBuffers(prev => ({ ...prev, [activeTabId]: sketches[activeTabId] }));
    }
  };

  // Splitter drag handler — updates editorFrac as the user drags.
  // Uses window listeners so the drag survives the cursor moving over the
  // iframe-ish child (the p5 canvas) that might swallow pointer events.
  const onSplitterPointerDown = useCallback((e) => {
    e.preventDefault();
    const mainEl = mainRef.current;
    if (!mainEl) return;
    const rect = mainEl.getBoundingClientRect();
    document.body.style.cursor = 'col-resize';
    document.body.style.userSelect = 'none';
    const onMove = (ev) => {
      const x = ev.clientX - rect.left;
      setEditorFrac(Math.max(0.2, Math.min(0.8, x / rect.width)));
    };
    const onUp = () => {
      document.body.style.cursor = '';
      document.body.style.userSelect = '';
      window.removeEventListener('pointermove', onMove);
      window.removeEventListener('pointerup', onUp);
    };
    window.addEventListener('pointermove', onMove);
    window.addEventListener('pointerup', onUp);
  }, []);

  const moduleIndex = modules.findIndex(m => m.id === currentModule?.id);
  const moduleLabel = t.modules[currentModule?.id] || '';

  return (
    <div style={{
      fontFamily: "'Courier New', ui-monospace, monospace",
      background: c.bg, color: c.text, height: '100vh',
      display: 'flex', flexDirection: 'column', margin: 0,
      transition: 'background 0.2s, color 0.2s'
    }}>
      <header style={{
        background: c.headerGrad, borderBottom: `2px solid ${c.accent}`,
        padding: '0.9rem 1.5rem', display: 'flex',
        justifyContent: 'space-between', alignItems: 'center', gap: '1rem', flexWrap: 'wrap'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.9rem' }}>
          <div style={{
            width: 38, height: 38, borderRadius: 6,
            background: c.accent, color: c.buttonText,
            display: 'grid', placeItems: 'center',
            fontWeight: 'bold', fontSize: '0.9rem',
            boxShadow: '0 2px 8px rgba(255, 122, 26, 0.35)',
            flexShrink: 0
          }} aria-label="YTÜ Programlama">YTÜ</div>
          <div>
            <h1 style={{
              fontSize: '1.4rem', color: c.accent, margin: '0 0 0.15rem 0',
              fontWeight: 'bold', letterSpacing: '0.01em'
            }}>{t.title}</h1>
            <p style={{ color: c.textMuted, fontSize: '0.72rem', margin: 0 }}>{t.subtitle}</p>
          </div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
            <span style={{ color: c.textMuted, fontSize: '0.7rem' }}>{t.themeLabel}:</span>
            <button className="studio-btn studio-btn-ghost" onClick={() => setThemeName('dark')} style={pillBtn(themeName === 'dark')}>🌙 {t.themeDark}</button>
            <button className="studio-btn studio-btn-ghost" onClick={() => setThemeName('light')} style={pillBtn(themeName === 'light')}>☀ {t.themeLight}</button>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
            <span style={{ color: c.textMuted, fontSize: '0.7rem' }}>🌐 {t.langLabel}:</span>
            {languages.map(l => (
              <button key={l.code} className="studio-btn studio-btn-ghost" onClick={() => setLang(l.code)} title={l.label} style={pillBtn(lang === l.code)}>
                <span style={{ marginRight: '0.25rem' }}>{l.flag}</span>{l.code.toUpperCase()}
              </button>
            ))}
          </div>
        </div>
      </header>

      <div style={{ display: 'flex', flex: 1, overflow: 'hidden', minHeight: 0 }}>
        <aside style={{
          width: '260px', background: c.panelAlt,
          borderRight: `1px solid ${c.border}`, overflowY: 'auto', flexShrink: 0
        }}>
          <div style={{
            padding: '0.9rem 1rem 0.5rem', color: c.accent,
            fontSize: '0.68rem', fontWeight: 'bold', letterSpacing: '0.15em'
          }}>{t.courseLabel}</div>
          {modules.map((mod, mi) => {
            const isPlaygroundModule = mod.id === 'm0';
            return (
              <div key={mod.id} style={{ paddingBottom: '0.5rem' }}>
                <div style={{
                  padding: '0.65rem 1rem 0.35rem',
                  fontSize: '0.7rem', color: isPlaygroundModule ? c.accent : c.textDim,
                  textTransform: 'uppercase',
                  fontWeight: 'bold', letterSpacing: '0.08em',
                  display: 'flex', alignItems: 'center', gap: '0.4rem'
                }}>
                  {isPlaygroundModule
                    ? <>🧪 {t.modules[mod.id]}</>
                    : <>{t.moduleWord} {mi} · {t.modules[mod.id]}</>
                  }
                </div>
                {mod.sectionIds.map((id, si) => {
                  const open = tabs.ids.includes(id);
                  const active = activeTabId === id;
                  return (
                    <button
                      key={id}
                      className="studio-btn studio-btn-ghost"
                      onClick={() => openTab(id)}
                      title={open && !active ? `${t.sections[id]}` : undefined}
                      style={{
                        '--hover-bg': c.accentSoft,
                        display: 'flex', width: '100%', padding: '0.55rem 1rem 0.55rem 1.25rem',
                        background: active ? c.accentSoft : 'transparent',
                        border: 'none',
                        borderLeft: active ? `3px solid ${c.accent}` : '3px solid transparent',
                        color: active ? c.accent : (open ? c.accent2 : c.text),
                        cursor: 'pointer', textAlign: 'left',
                        fontSize: '0.78rem', fontFamily: 'inherit',
                        fontWeight: active ? 'bold' : 'normal',
                        alignItems: 'center', gap: '0.5rem'
                      }}>
                      <span style={{
                        fontSize: '0.7rem', color: active ? c.accent : c.textDim,
                        minWidth: '1.9rem', fontVariantNumeric: 'tabular-nums'
                      }}>{isPlaygroundModule ? '∞' : `${mi}.${si + 1}`}</span>
                      <span>{sectionIcons[id]}</span>
                      <span style={{ flex: 1 }}>{t.sections[id]}</span>
                      {open && !active && <span style={{
                        fontSize: '0.55rem', opacity: 0.7, letterSpacing: '0.05em'
                      }}>●</span>}
                    </button>
                  );
                })}
              </div>
            );
          })}
          <div style={{
            padding: '0.9rem 1rem 1.1rem', marginTop: '0.5rem',
            borderTop: `1px solid ${c.border}`,
            color: c.textDim, fontSize: '0.68rem', lineHeight: 1.5
          }}>
            {t.about}
          </div>
        </aside>

        <main ref={mainRef} style={{
          flex: 1, display: 'grid',
          gridTemplateColumns: `${editorFrac}fr 6px ${1 - editorFrac}fr`,
          overflow: 'hidden', minWidth: 0
        }}>
          <div style={{
            display: 'flex', flexDirection: 'column',
            overflow: 'hidden', background: c.editorBg, minWidth: 0
          }}>
            <div className="studio-tabbar" style={{
              display: 'flex', background: c.panelAlt,
              borderBottom: `1px solid ${c.border}`,
              overflowX: 'auto', overflowY: 'hidden',
              scrollbarWidth: 'thin', flexShrink: 0
            }}>
              {tabs.ids.map(id => {
                const active = id === activeTabId;
                const icon = sectionIcons[id] || '📄';
                const title = t.sections[id] || id;
                const closable = tabs.ids.length > 1;
                return (
                  <div
                    key={id}
                    className="studio-tab"
                    data-active={active || undefined}
                    onClick={() => focusTab(id)}
                    onAuxClick={(e) => { if (e.button === 1 && closable) { e.preventDefault(); closeTab(id); } }}
                    style={{
                      display: 'flex', alignItems: 'center', gap: '0.4rem',
                      padding: '0.5rem 0.3rem 0.5rem 0.75rem',
                      background: active ? c.editorBg : 'transparent',
                      color: active ? c.accent : c.textMuted,
                      borderRight: `1px solid ${c.border}`,
                      borderTop: active ? `2px solid ${c.accent}` : '2px solid transparent',
                      borderBottom: active
                        ? `1px solid ${c.editorBg}`
                        : `1px solid transparent`,
                      marginBottom: active ? '-1px' : '0',
                      cursor: 'pointer', fontSize: '0.74rem',
                      whiteSpace: 'nowrap', userSelect: 'none',
                      fontWeight: active ? 'bold' : 'normal',
                      '--hover-bg': c.accentSoft
                    }}
                    role="tab"
                    aria-selected={active}
                  >
                    <span aria-hidden="true">{icon}</span>
                    <span>{title}</span>
                    {closable && (
                      <button
                        className="studio-tab-close"
                        onClick={(e) => { e.stopPropagation(); closeTab(id); }}
                        aria-label={`Close ${title}`}
                        title="Close"
                        style={{
                          background: 'transparent', border: 'none', cursor: 'pointer',
                          color: 'inherit', padding: '0 0.3rem',
                          fontSize: '0.95rem', lineHeight: 1, borderRadius: '3px',
                          fontFamily: 'inherit'
                        }}
                      >×</button>
                    )}
                  </div>
                );
              })}
              <div style={{ flex: 1, borderBottom: `1px solid ${c.border}` }} />
            </div>

            <div style={{
              background: c.panel, padding: '0.5rem 1rem',
              borderBottom: `1px solid ${c.border}`,
              fontSize: '0.7rem', fontWeight: 'bold', color: c.accent2,
              display: 'flex', justifyContent: 'space-between', alignItems: 'center',
              letterSpacing: '0.08em', gap: '0.5rem', flexShrink: 0
            }}>
              <span>✎ {t.editor}</span>
              <span style={{ color: c.textDim, fontWeight: 'normal', fontSize: '0.66rem' }}>{t.editorSub}</span>
            </div>

            <div style={{ flex: 1, overflow: 'hidden', minHeight: 0, display: 'flex', flexDirection: 'column' }}>
              <CodeMirror
                value={code}
                height="100%"
                theme="none"
                extensions={editorExtensions}
                onChange={onCodeChange}
                basicSetup={{ lineNumbers: true, highlightActiveLine: true, foldGutter: true }}
                style={{ flex: 1, minHeight: 0, fontSize: '13px', background: c.editorBg }}
              />
            </div>

            {error && <div style={{
              padding: '0.6rem 1rem', background: c.accent2Soft, color: c.accent2,
              fontSize: '0.72rem', borderTop: `1px solid ${c.border}`,
              whiteSpace: 'pre-wrap', wordBreak: 'break-word', flexShrink: 0
            }}>⚠ {error}</div>}

            <div style={{
              padding: '0.7rem 1rem', borderTop: `1px solid ${c.border}`,
              display: 'flex', gap: '0.5rem', background: c.panel, flexWrap: 'wrap',
              flexShrink: 0
            }}>
              <button className="studio-btn" onClick={runSketch} style={{
                background: c.buttonBg, color: c.buttonText, border: 'none',
                padding: '0.55rem 1.25rem', fontWeight: 'bold', cursor: 'pointer',
                borderRadius: '4px', fontSize: '0.78rem', fontFamily: 'inherit'
              }}>{t.run}</button>
              <button className="studio-btn studio-btn-ghost" onClick={resetCurrent} style={{
                background: 'transparent', color: c.accent,
                border: `1px solid ${c.accent}`,
                padding: '0.55rem 1.25rem', cursor: 'pointer',
                borderRadius: '4px', fontSize: '0.78rem', fontFamily: 'inherit',
                '--hover-bg': c.accentSoft
              }}>{t.reset}</button>
              <div style={{ flex: 1 }} />
              <button className="studio-btn studio-btn-ghost" onClick={downloadSketch} title={t.download} style={{
                background: 'transparent', color: c.textMuted,
                border: `1px solid ${c.border}`,
                padding: '0.55rem 0.75rem', cursor: 'pointer',
                borderRadius: '4px', fontSize: '0.78rem', fontFamily: 'inherit',
                '--hover-bg': c.accentSoft
              }} aria-label={t.download}>{t.downloadLabel}</button>
              <button className="studio-btn studio-btn-ghost" onClick={() => fileInputRef.current?.click()} title={t.upload} style={{
                background: 'transparent', color: c.textMuted,
                border: `1px solid ${c.border}`,
                padding: '0.55rem 0.75rem', cursor: 'pointer',
                borderRadius: '4px', fontSize: '0.78rem', fontFamily: 'inherit',
                '--hover-bg': c.accentSoft
              }} aria-label={t.upload}>{t.uploadLabel}</button>
              <input
                ref={fileInputRef}
                type="file"
                accept=".pde,.txt,.java,text/plain"
                style={{ display: 'none' }}
                onChange={uploadSketch}
              />
            </div>
          </div>

          <div
            className="studio-splitter"
            onPointerDown={onSplitterPointerDown}
            onDoubleClick={() => setEditorFrac(0.5)}
            role="separator"
            aria-orientation="vertical"
            aria-label="Resize editor / canvas"
            style={{
              background: c.border,
              cursor: 'col-resize',
              userSelect: 'none',
              touchAction: 'none'
            }}
          />

          <div style={{
            background: c.panel, display: 'flex', flexDirection: 'column',
            overflow: 'hidden', minWidth: 0
          }}>
            <div style={{
              padding: '1.25rem 1.5rem 1rem',
              borderBottom: `1px solid ${c.border}`, background: c.canvasBg,
              display: 'flex', flexDirection: 'column', alignItems: 'center',
              flexShrink: 0
            }}>
              <div ref={canvasRef} style={{
                background: c.canvasFrame,
                borderRadius: '6px', overflow: 'hidden',
                boxShadow: c.shadow,
                border: `1px solid ${c.border}`,
                maxWidth: '100%'
              }} />
            </div>

            <div style={{ flex: 1, overflowY: 'auto', padding: '1.5rem' }}>
              <div style={{
                fontSize: '0.7rem', letterSpacing: '0.1em',
                color: isPlayground ? c.accent : c.textDim,
                fontWeight: 'bold', marginBottom: '0.4rem'
              }}>
                {isPlayground
                  ? t.playgroundBadge
                  : `${t.moduleWord.toUpperCase()} ${moduleIndex} · ${moduleLabel.toUpperCase()}`}
              </div>
              <h2 style={{
                margin: '0 0 1rem 0', fontSize: '1.35rem',
                color: c.accent, fontWeight: 'bold'
              }}>
                {!isPlayground && <span style={{ color: c.accent2, marginRight: '0.5rem' }}>{sectionNum}</span>}
                {sectionIcons[activeTabId]} {t.sections[activeTabId]}
              </h2>

              <div style={{ marginBottom: '1.25rem' }}>
                <div style={{
                  fontSize: '0.7rem', fontWeight: 'bold',
                  color: c.accent2, letterSpacing: '0.08em', marginBottom: '0.4rem'
                }}>▸ {t.lessonIntro.toUpperCase()}</div>
                <p style={{
                  margin: 0, lineHeight: 1.7, fontSize: '0.85rem',
                  color: c.text
                }}>{lesson.intro}</p>
              </div>

              <div style={{ marginBottom: '1.25rem' }}>
                <div style={{
                  fontSize: '0.7rem', fontWeight: 'bold',
                  color: c.accent2, letterSpacing: '0.08em', marginBottom: '0.4rem'
                }}>▸ {t.lessonConcepts.toUpperCase()}</div>
                <ul style={{
                  margin: 0, paddingLeft: '1.2rem', lineHeight: 1.6,
                  fontSize: '0.82rem', color: c.text
                }}>
                  {lesson.concepts.map((concept, i) => (
                    <li key={i} style={{ marginBottom: '0.4rem' }}>{concept}</li>
                  ))}
                </ul>
              </div>

              <div style={{
                padding: '0.9rem 1rem', borderRadius: '6px',
                background: c.accentSoft, border: `1px solid ${c.accent}`
              }}>
                <div style={{
                  fontSize: '0.7rem', fontWeight: 'bold',
                  color: c.accent, letterSpacing: '0.08em', marginBottom: '0.4rem'
                }}>▸ {t.lessonTryIt.toUpperCase()}</div>
                <p style={{ margin: 0, lineHeight: 1.6, fontSize: '0.82rem', color: c.text }}>
                  {lesson.tryIt}
                </p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
