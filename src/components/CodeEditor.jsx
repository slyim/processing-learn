import { useMemo, useRef, useState } from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { java } from '@codemirror/lang-java';
import { HighlightStyle, syntaxHighlighting } from '@codemirror/language';
import { tags as T } from '@lezer/highlight';
import { EditorView } from '@codemirror/view';
import { sectionIcons } from '../sketches';
import Icon, { PdeIcon } from './Icon';

// Custom highlight palette pulled from the design tokens (t.sk/sb/ss/...).
// Built per-theme so dark/light both resolve against the same token names.
function buildHighlightStyle(c) {
  return HighlightStyle.define([
    { tag: [T.keyword, T.modifier, T.controlKeyword, T.operatorKeyword], color: c.sk, fontWeight: '500' },
    { tag: [T.string, T.special(T.string)], color: c.ss },
    { tag: [T.number, T.bool, T.null], color: c.sn },
    { tag: [T.lineComment, T.blockComment], color: c.sc, fontStyle: 'italic' },
    { tag: [T.function(T.variableName), T.function(T.propertyName)], color: c.sf },
    { tag: [T.typeName, T.className, T.namespace], color: c.sb },
    { tag: [T.atom, T.self], color: c.so },
    { tag: T.operator, color: c.so },
    { tag: T.punctuation, color: c.sd },
    { tag: T.propertyName, color: c.sf },
    { tag: T.variableName, color: c.sd }
  ]);
}

export default function CodeEditor({
  t, c, code, onCodeChange, fontSize,
  tabs, activeId, tabLabelFor, userNodes,
  onFocusTab, onCloseTab, onReorderTab,
  onRun, onStop, stopped, onReset, onDownload, onUpload,
  error
}) {
  const fileInputRef = useRef(null);
  const [draggedTab, setDraggedTab] = useState(null);
  const [dragOverTab, setDragOverTab] = useState(null);

  const hasActive = !!activeId;

  const extensions = useMemo(() => {
    const editorChrome = EditorView.theme({
      '&': { backgroundColor: c.editorBg, color: c.sd, height: '100%' },
      '.cm-scroller': {
        backgroundColor: c.editorBg,
        fontFamily: '"JetBrains Mono", ui-monospace, monospace',
        fontSize: `${fontSize}px`,
        lineHeight: '1.55'
      },
      '.cm-content': { caretColor: c.accent, padding: '12px 0' },
      '.cm-gutters': {
        backgroundColor: c.editorGutter,
        color: c.lineNum,
        border: 'none',
        borderRight: `1px solid ${c.borderLight}`,
        paddingRight: 4
      },
      '.cm-lineNumbers .cm-gutterElement': { color: c.lineNum, padding: '0 10px 0 12px' },
      '.cm-activeLine': { backgroundColor: c.accentDim },
      '.cm-activeLineGutter': { backgroundColor: c.accentDim, color: c.accent },
      '.cm-cursor, .cm-dropCursor': { borderLeftColor: c.accent, borderLeftWidth: '2px' },
      '&.cm-focused .cm-selectionBackground, ::selection, .cm-selectionBackground':
        { backgroundColor: c.accentDim },
      '.cm-selectionMatch': { backgroundColor: c.accentDim },
      '.cm-matchingBracket, .cm-nonmatchingBracket':
        { backgroundColor: c.accentDim, color: c.accent, outline: 'none' },
      '.cm-panels': { backgroundColor: c.panel, color: c.text },
      '.cm-tooltip': {
        backgroundColor: c.panel, color: c.text,
        border: `1px solid ${c.border}`
      }
    }, { dark: c.bg.startsWith('#0') });

    return [
      java(),
      EditorView.lineWrapping,
      syntaxHighlighting(buildHighlightStyle(c)),
      editorChrome
    ];
  }, [c, fontSize]);

  return (
    <div style={{
      flex: 1, display: 'flex', flexDirection: 'column',
      minWidth: 0, background: c.editorBg
    }}>
      <div style={{
        display: 'flex', alignItems: 'center', gap: 8,
        padding: '0 16px', height: 38, flexShrink: 0,
        background: c.panel, borderBottom: `1px solid ${c.border}`
      }}>
        <span style={{ color: c.accent, display: 'inline-flex' }}>
          <Icon name="code" size={14} />
        </span>
        <span style={{
          fontSize: 10.5, fontWeight: 700, letterSpacing: '0.1em',
          color: c.textMuted, fontFamily: 'Inter, sans-serif'
        }}>{t.editor}</span>
      </div>

      <div style={{
        display: 'flex', alignItems: 'stretch', flexShrink: 0,
        borderBottom: `1px solid ${c.border}`,
        background: c.tabInactive, minWidth: 0
      }}>
      <div className="editor-tabbar" style={{
        display: 'flex', alignItems: 'stretch',
        background: c.tabInactive,
        overflowX: 'auto', flex: 1, minWidth: 0, height: 38
      }}>
        {tabs.map(id => {
          const isActive = id === activeId;
          const label = tabLabelFor ? tabLabelFor(id) : id;
          const isUser = userNodes && !!userNodes[id];
          const isUserPde = isUser && /\.pde$/i.test(userNodes[id].name || '');
          const displayIcon = isUser
            ? (isUserPde
                ? <PdeIcon size={13} />
                : <Icon name="file-text" size={13} />)
            : (sectionIcons[id] || null);
          const isDragOver = dragOverTab === id && draggedTab && draggedTab !== id;

          return (
            <div
              key={id}
              onClick={() => onFocusTab(id)}
              onAuxClick={(e) => { if (e.button === 1) { e.preventDefault(); onCloseTab(id); } }}
              draggable
              onDragStart={(e) => {
                e.dataTransfer.effectAllowed = 'move';
                try { e.dataTransfer.setData('text/plain', id); } catch { /* ignore */ }
                setDraggedTab(id);
              }}
              onDragOver={(e) => {
                if (!draggedTab || draggedTab === id) return;
                e.preventDefault();
                e.dataTransfer.dropEffect = 'move';
                if (dragOverTab !== id) setDragOverTab(id);
              }}
              onDragLeave={(e) => {
                if (e.currentTarget.contains(e.relatedTarget)) return;
                if (dragOverTab === id) setDragOverTab(null);
              }}
              onDrop={(e) => {
                e.preventDefault();
                if (draggedTab && draggedTab !== id && onReorderTab) {
                  onReorderTab(draggedTab, id);
                }
                setDraggedTab(null);
                setDragOverTab(null);
              }}
              onDragEnd={() => { setDraggedTab(null); setDragOverTab(null); }}
              className="editor-tab"
              data-active={isActive || undefined}
              style={{
                display: 'flex', alignItems: 'center', gap: 7,
                padding: '0 10px 0 14px', cursor: 'pointer', flexShrink: 0,
                background: isActive ? c.tabActive : 'transparent',
                borderRight: `1px solid ${c.border}`,
                borderBottom: isActive ? `2px solid ${c.accent}` : '2px solid transparent',
                borderLeft: isDragOver ? `2px solid ${c.accent}` : '2px solid transparent',
                opacity: draggedTab === id ? 0.5 : 1,
                transition: 'background 0.12s',
                ['--hover-bg']: c.tabHover
              }}
            >
              <span aria-hidden="true" style={{
                fontSize: 13, display: 'inline-flex', alignItems: 'center',
                color: isUser ? (isActive ? c.accent : c.textMuted) : 'inherit'
              }}>{displayIcon}</span>
              <span style={{
                fontSize: 12, fontFamily: isUser ? '"JetBrains Mono", monospace' : 'Inter, sans-serif',
                fontWeight: isActive ? 600 : 400,
                color: isActive ? c.text : c.textMuted,
                whiteSpace: 'nowrap'
              }}>{label}</span>
              <button
                className="editor-tab-close"
                onClick={(e) => { e.stopPropagation(); onCloseTab(id); }}
                aria-label={`Close ${label}`}
                title="Close (Ctrl+W)"
                style={{
                  background: 'none', border: 'none', cursor: 'pointer',
                  padding: 2, color: c.textDim,
                  display: 'flex', alignItems: 'center',
                  borderRadius: 3, marginLeft: 2, opacity: 0.6
                }}
              >
                <Icon name="close" size={12} />
              </button>
            </div>
          );
        })}
      </div>
        {/* Run / Stop are pinned outside the scrolling tab strip so they stay
            visible no matter how many tabs are open or how narrow the editor
            gets. Left border separates them from the last tab visually. */}
        {hasActive && (
          <div style={{
            display: 'flex', alignItems: 'center', gap: 2,
            padding: '0 8px', flexShrink: 0,
            borderLeft: `1px solid ${c.border}`,
            background: c.tabInactive
          }}>
            <button
              onClick={onRun}
              title={`${t.run || 'Run'} (Ctrl+R)`}
              aria-label={t.run || 'Run'}
              className="btn-run-icon"
              style={runIconBtn(c, !stopped)}
            >
              <Icon name="play-arrow" size={16} />
            </button>
            <button
              onClick={onStop}
              disabled={stopped}
              title={stopped ? (t.stopped || 'Stopped') : (t.stop || 'Stop sketch')}
              aria-label={t.stop || 'Stop sketch'}
              className="btn-run-icon"
              style={stopIconBtn(c, stopped)}
            >
              <Icon name="square" size={13} />
            </button>
          </div>
        )}
      </div>

      <div style={{ flex: 1, overflow: 'hidden', minHeight: 0, display: 'flex', flexDirection: 'column' }}>
        {hasActive ? (
          <CodeMirror
            value={code}
            height="100%"
            theme="none"
            extensions={extensions}
            onChange={onCodeChange}
            basicSetup={{
              lineNumbers: true,
              highlightActiveLine: true,
              foldGutter: true,
              indentOnInput: true,
              bracketMatching: true,
              closeBrackets: true
            }}
            style={{ flex: 1, minHeight: 0, background: c.editorBg }}
          />
        ) : (
          <div style={{
            flex: 1, display: 'flex', flexDirection: 'column',
            alignItems: 'center', justifyContent: 'center',
            color: c.textMuted, gap: 10, padding: 24, textAlign: 'center'
          }}>
            <span style={{ color: c.textDim, display: 'inline-flex' }}>
              <Icon name="file-text" size={38} />
            </span>
            <div style={{
              fontSize: 14, fontWeight: 600, color: c.text,
              fontFamily: 'Inter, sans-serif'
            }}>{t.nothingOpen || 'Nothing is open'}</div>
            <div style={{
              fontSize: 12, color: c.textMuted, lineHeight: 1.55,
              fontFamily: 'Inter, sans-serif', maxWidth: 320
            }}>
              {t.nothingOpenHint || 'Open a lesson from the Courses tab, or create a sketch in the Files tab.'}
            </div>
          </div>
        )}
      </div>

      {error && (
        <div style={{
          padding: '0.6rem 1rem',
          background: 'rgba(239, 68, 68, 0.08)',
          color: '#ef4444',
          fontSize: 12,
          borderTop: `1px solid ${c.border}`,
          whiteSpace: 'pre-wrap', wordBreak: 'break-word', flexShrink: 0,
          fontFamily: '"JetBrains Mono", monospace'
        }}>⚠ {error}</div>
      )}

      {hasActive && (
        <div style={{
          display: 'flex', alignItems: 'center', gap: 8,
          padding: '10px 16px',
          background: c.panel, borderTop: `1px solid ${c.border}`, flexShrink: 0
        }}>
          <button onClick={onReset} className="btn-ghost" style={{
            display: 'flex', alignItems: 'center', gap: 6,
            background: c.resetBg, color: c.resetText,
            border: `1px solid ${c.resetBorder}`, cursor: 'pointer',
            padding: '7px 14px', borderRadius: 7,
            fontSize: 13, fontWeight: 500,
            fontFamily: 'Inter, sans-serif', transition: 'all 0.15s',
            ['--hover-border']: c.accentBorder
          }}>
            <Icon name="refresh" size={13} />
            {t.reset}
          </button>

          <div style={{ flex: 1 }} />

          <button onClick={onDownload} title={t.download} className="btn-icon" style={iconBtnStyle(c)}>
            <Icon name="download" size={14} />
          </button>
          <button onClick={() => fileInputRef.current?.click()} title={t.upload} className="btn-icon" style={iconBtnStyle(c)}>
            <Icon name="upload" size={14} />
          </button>
          <input
            ref={fileInputRef}
            type="file"
            accept=".pde,.txt,.java,text/plain"
            style={{ display: 'none' }}
            onChange={onUpload}
          />
        </div>
      )}
    </div>
  );
}

function iconBtnStyle(c) {
  return {
    background: c.resetBg, border: `1px solid ${c.resetBorder}`,
    borderRadius: 6, cursor: 'pointer',
    padding: '6px 9px', color: c.textMuted,
    display: 'flex', alignItems: 'center',
    transition: 'all 0.15s',
    ['--hover-color']: c.accent,
    ['--hover-border']: c.accentBorder
  };
}

// Flat icon-only Run / Stop buttons that live in the editor's tab strip — same
// vibe as VS Code's run-this-file caret in the top-right. Resting state is
// already accent-colored so the action reads at a glance, hover bumps to
// accentHover and adds a soft accentDim halo for tactile feedback.
function runIconBtn(c, active) {
  return {
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    background: 'transparent', border: 'none', cursor: 'pointer',
    width: 28, height: 26, borderRadius: 6,
    color: active ? c.accent : c.textMuted,
    transition: 'background 0.12s, color 0.12s, transform 0.12s',
    ['--hover-bg']: c.accentDim,
    ['--hover-color']: c.accentHover
  };
}

function stopIconBtn(c, disabled) {
  return {
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    background: 'transparent',
    border: 'none',
    cursor: disabled ? 'not-allowed' : 'pointer',
    width: 28, height: 26, borderRadius: 6,
    color: disabled ? c.textDim : c.textMuted,
    opacity: disabled ? 0.5 : 1,
    transition: 'background 0.12s, color 0.12s',
    ['--hover-bg']: disabled ? 'transparent' : c.accentDim,
    ['--hover-color']: disabled ? c.textDim : c.accent
  };
}
