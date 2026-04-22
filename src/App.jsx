import React, { useState, useEffect, useRef, useMemo } from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { java } from '@codemirror/lang-java';
import { oneDark } from '@codemirror/theme-one-dark';
import { EditorView } from '@codemirror/view';
import { sketches, sectionIcons } from './sketches';
import { translations, languages, modules, sectionNumber } from './i18n';
import { transpile } from './transpile';
import { themes } from './theme';

export default function ProcessingStudio() {
  const [lang, setLang] = useState(() => localStorage.getItem('lang') || 'en');
  const [themeName, setThemeName] = useState(() => localStorage.getItem('theme') || 'dark');
  const [currentSection, setCurrentSection] = useState('intro');
  const [code, setCode] = useState(sketches.intro);
  const [error, setError] = useState(null);
  const canvasRef = useRef(null);
  const p5Instance = useRef(null);

  const t = translations[lang];
  const c = themes[themeName];

  useEffect(() => { localStorage.setItem('lang', lang); }, [lang]);
  useEffect(() => { localStorage.setItem('theme', themeName); }, [themeName]);
  useEffect(() => { document.body.style.background = c.bg; }, [c.bg]);

  useEffect(() => {
    setCode(sketches[currentSection]);
  }, [currentSection]);

  useEffect(() => {
    const timer = setTimeout(runSketch, 150);
    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [code]);

  useEffect(() => {
    return () => {
      if (p5Instance.current) p5Instance.current.remove();
    };
  }, []);

  const runSketch = () => {
    setError(null);
    if (p5Instance.current) {
      p5Instance.current.remove();
      p5Instance.current = null;
    }
    if (!window.p5 || !canvasRef.current) return;
    try {
      const jsCode = transpile(code);
      const hooks = ['setup', 'draw', 'mousePressed', 'mouseReleased', 'mouseMoved', 'mouseDragged', 'keyPressed', 'keyReleased'];
      let wrapped = jsCode;
      for (const h of hooks) {
        wrapped = wrapped.replace(new RegExp(`function\\s+${h}\\s*\\(`, 'g'), `p.${h} = function(`);
      }
      p5Instance.current = new window.p5((p) => {
        new Function('p', `with (p) { ${wrapped} }`)(p);
      }, canvasRef.current);
    } catch (err) {
      console.error('Sketch error:', err);
      setError(err.message);
    }
  };

  const editorExtensions = useMemo(() => {
    const darkOverride = EditorView.theme({
      '&': { backgroundColor: c.bg, color: c.text },
      '.cm-content': { caretColor: c.accent },
      '.cm-gutters': {
        backgroundColor: c.panel, color: c.textDim,
        border: 'none', borderRight: `1px solid ${c.border}`
      },
      '.cm-activeLine': { backgroundColor: c.accentSoft },
      '.cm-activeLineGutter': { backgroundColor: c.accentSoft, color: c.accent },
      '.cm-cursor': { borderLeftColor: c.accent },
      '&.cm-focused .cm-selectionBackground, ::selection': {
        backgroundColor: 'rgba(0,208,132,0.25)'
      }
    }, { dark: true });

    const lightOverride = EditorView.theme({
      '&': { backgroundColor: c.panel, color: c.text },
      '.cm-content': { caretColor: c.accent },
      '.cm-gutters': {
        backgroundColor: c.bg, color: c.textDim,
        border: 'none', borderRight: `1px solid ${c.border}`
      },
      '.cm-activeLine': { backgroundColor: c.accentSoft },
      '.cm-activeLineGutter': { backgroundColor: c.accentSoft, color: c.accent },
      '.cm-cursor': { borderLeftColor: c.accent }
    });

    const base = [java(), EditorView.lineWrapping];
    return themeName === 'dark'
      ? [...base, oneDark, darkOverride]
      : [...base, lightOverride];
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

  const lesson = t.lessons[currentSection];
  const sectionNum = sectionNumber(currentSection);

  return (
    <div style={{
      fontFamily: "'Courier New', ui-monospace, monospace",
      background: c.bg, color: c.text, height: '100vh',
      display: 'flex', flexDirection: 'column', margin: 0, transition: 'background 0.2s, color 0.2s'
    }}>
      <header style={{
        background: c.headerGrad, borderBottom: `2px solid ${c.accent}`,
        padding: '0.9rem 1.5rem', display: 'flex',
        justifyContent: 'space-between', alignItems: 'center', gap: '1rem', flexWrap: 'wrap'
      }}>
        <div>
          <h1 style={{ fontSize: '1.45rem', color: c.accent, margin: '0 0 0.15rem 0', fontWeight: 'bold' }}>{t.title}</h1>
          <p style={{ color: c.textMuted, fontSize: '0.72rem', margin: 0 }}>{t.subtitle}</p>
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
          {modules.map((mod, mi) => (
            <div key={mod.id} style={{ paddingBottom: '0.5rem' }}>
              <div style={{
                padding: '0.65rem 1rem 0.35rem',
                fontSize: '0.7rem', color: c.textDim, textTransform: 'uppercase',
                fontWeight: 'bold', letterSpacing: '0.08em'
              }}>{t.moduleWord} {mi + 1} · {t.modules[mod.id]}</div>
              {mod.sectionIds.map((id, si) => {
                const active = currentSection === id;
                return (
                  <button key={id} className="studio-btn studio-btn-ghost" onClick={() => setCurrentSection(id)} style={{
                    '--hover-bg': c.accentSoft,
                    display: 'flex', width: '100%', padding: '0.55rem 1rem 0.55rem 1.25rem',
                    background: active ? c.accentSoft : 'transparent',
                    border: 'none',
                    borderLeft: active ? `3px solid ${c.accent}` : '3px solid transparent',
                    color: active ? c.accent : c.text,
                    cursor: 'pointer', textAlign: 'left',
                    fontSize: '0.78rem', fontFamily: 'inherit',
                    fontWeight: active ? 'bold' : 'normal',
                    alignItems: 'center', gap: '0.5rem'
                  }}>
                    <span style={{
                      fontSize: '0.7rem', color: active ? c.accent : c.textDim,
                      minWidth: '1.9rem', fontVariantNumeric: 'tabular-nums'
                    }}>{mi + 1}.{si + 1}</span>
                    <span>{sectionIcons[id]}</span>
                    <span>{t.sections[id]}</span>
                  </button>
                );
              })}
            </div>
          ))}
        </aside>

        <main style={{ flex: 1, display: 'grid', gridTemplateColumns: '1fr 1fr', overflow: 'hidden' }}>
          <div style={{ display: 'flex', flexDirection: 'column', borderRight: `1px solid ${c.border}`, overflow: 'hidden', background: c.editorBg }}>
            <div style={{
              background: c.panel, padding: '0.6rem 1rem',
              borderBottom: `1px solid ${c.border}`,
              fontSize: '0.72rem', fontWeight: 'bold', color: c.accent2,
              display: 'flex', justifyContent: 'space-between', alignItems: 'center',
              letterSpacing: '0.08em'
            }}>
              <span>✎ {t.editor}</span>
              <span style={{ color: c.textDim, fontWeight: 'normal', fontSize: '0.68rem' }}>{t.editorSub}</span>
            </div>
            <div style={{ flex: 1, overflow: 'auto' }}>
              <CodeMirror
                value={code}
                height="100%"
                theme={themeName === 'dark' ? oneDark : 'light'}
                extensions={editorExtensions}
                onChange={(v) => setCode(v)}
                basicSetup={{ lineNumbers: true, highlightActiveLine: true, foldGutter: true }}
                style={{ height: '100%', fontSize: '13px' }}
              />
            </div>
            {error && <div style={{
              padding: '0.6rem 1rem', background: c.accent2Soft, color: c.accent2,
              fontSize: '0.72rem', borderTop: `1px solid ${c.border}`
            }}>⚠ {error}</div>}
            <div style={{
              padding: '0.7rem 1rem', borderTop: `1px solid ${c.border}`,
              display: 'flex', gap: '0.75rem', background: c.panel
            }}>
              <button className="studio-btn" onClick={runSketch} style={{
                background: c.buttonBg, color: c.buttonText, border: 'none',
                padding: '0.55rem 1.25rem', fontWeight: 'bold', cursor: 'pointer',
                borderRadius: '4px', fontSize: '0.78rem', fontFamily: 'inherit'
              }}>{t.run}</button>
              <button className="studio-btn studio-btn-ghost" onClick={() => setCode(sketches[currentSection])} style={{
                background: 'transparent', color: c.accent,
                border: `1px solid ${c.accent}`,
                padding: '0.55rem 1.25rem', cursor: 'pointer',
                borderRadius: '4px', fontSize: '0.78rem', fontFamily: 'inherit',
                '--hover-bg': c.accentSoft
              }}>{t.reset}</button>
            </div>
          </div>

          <div style={{ background: c.panel, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
            <div style={{
              padding: '1.25rem 1.5rem 1rem',
              borderBottom: `1px solid ${c.border}`, background: c.canvasBg,
              display: 'flex', flexDirection: 'column', alignItems: 'center'
            }}>
              <div ref={canvasRef} style={{
                background: themeName === 'dark' ? '#0a0e27' : '#ffffff',
                borderRadius: '6px', overflow: 'hidden',
                boxShadow: c.shadow,
                border: `1px solid ${c.border}`
              }} />
            </div>

            <div style={{ flex: 1, overflowY: 'auto', padding: '1.5rem' }}>
              <div style={{
                fontSize: '0.7rem', letterSpacing: '0.1em',
                color: c.textDim, fontWeight: 'bold', marginBottom: '0.4rem'
              }}>
                {t.moduleWord.toUpperCase()} {sectionNum.split('.')[0]} · {t.modules[modules.find(m => m.sectionIds.includes(currentSection)).id].toUpperCase()}
              </div>
              <h2 style={{
                margin: '0 0 1rem 0', fontSize: '1.35rem',
                color: c.accent, fontWeight: 'bold'
              }}>
                <span style={{ color: c.accent2, marginRight: '0.5rem' }}>{sectionNum}</span>
                {sectionIcons[currentSection]} {t.sections[currentSection]}
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
