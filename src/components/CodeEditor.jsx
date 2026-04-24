import { useMemo, useRef } from 'react';
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
  onFocusTab, onCloseTab, onNewTab,
  onRun, onReset, onDownload, onUpload, onPrev, onNext,
  error, running
}) {
  const fileInputRef = useRef(null);

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

      <div className="editor-tabbar" style={{
        display: 'flex', alignItems: 'stretch',
        borderBottom: `1px solid ${c.border}`,
        background: c.tabInactive,
        overflowX: 'auto', flexShrink: 0, height: 38
      }}>
        {tabs.map(id => {
          const isActive = id === activeId;
          const label = tabLabelFor ? tabLabelFor(id) : id;
          const isUser = userNodes && !!userNodes[id];
          const closable = tabs.length > 1;
          // User files are nearly always .pde sketches, so show the branded
          // Processing tile; fall back to the generic document icon for the
          // rare case of a non-.pde user file (e.g. notes.txt).
          const isUserPde = isUser && /\.pde$/i.test(userNodes[id].name || '');
          const displayIcon = isUser
            ? (isUserPde
                ? <PdeIcon size={13} />
                : <Icon name="file-text" size={13} />)
            : (sectionIcons[id] || null);

          return (
            <div
              key={id}
              onClick={() => onFocusTab(id)}
              onAuxClick={(e) => { if (e.button === 1 && closable) { e.preventDefault(); onCloseTab(id); } }}
              className="editor-tab"
              data-active={isActive || undefined}
              style={{
                display: 'flex', alignItems: 'center', gap: 7,
                padding: '0 10px 0 14px', cursor: 'pointer', flexShrink: 0,
                background: isActive ? c.tabActive : 'transparent',
                borderRight: `1px solid ${c.border}`,
                borderBottom: isActive ? `2px solid ${c.accent}` : '2px solid transparent',
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
              {closable && (
                <button
                  className="editor-tab-close"
                  onClick={(e) => { e.stopPropagation(); onCloseTab(id); }}
                  aria-label={`Close ${label}`}
                  title="Close"
                  style={{
                    background: 'none', border: 'none', cursor: 'pointer',
                    padding: 2, color: c.textDim,
                    display: 'flex', alignItems: 'center',
                    borderRadius: 3, marginLeft: 2, opacity: 0.6
                  }}
                >
                  <Icon name="close" size={12} />
                </button>
              )}
            </div>
          );
        })}
        <button
          onClick={onNewTab}
          className="editor-tab-new"
          title="New tab"
          aria-label="New tab"
          style={{
            padding: '0 12px', background: 'none', border: 'none',
            cursor: 'pointer', color: c.textDim,
            display: 'flex', alignItems: 'center'
          }}
        >
          <Icon name="plus" size={13} />
        </button>
        <div style={{
          flex: 1, display: 'flex', alignItems: 'center',
          justifyContent: 'flex-end', padding: '0 14px'
        }}>
          <span style={{
            fontSize: 10.5, color: c.textMuted,
            fontFamily: '"JetBrains Mono", monospace',
            opacity: 0.7, letterSpacing: '0.05em'
          }}>{t.editorSub}</span>
        </div>
      </div>

      <div style={{ flex: 1, overflow: 'hidden', minHeight: 0, display: 'flex', flexDirection: 'column' }}>
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

      <div style={{
        display: 'flex', alignItems: 'center', gap: 8,
        padding: '10px 16px',
        background: c.panel, borderTop: `1px solid ${c.border}`, flexShrink: 0
      }}>
        <button onClick={onRun} className="btn-run" style={{
          display: 'flex', alignItems: 'center', gap: 7,
          background: running ? c.accentHover : c.runBg,
          color: c.runText, border: 'none', cursor: 'pointer',
          padding: '7px 18px', borderRadius: 7,
          fontSize: 13, fontWeight: 700,
          fontFamily: 'Inter, sans-serif', letterSpacing: '0.01em',
          transition: 'all 0.15s',
          boxShadow: `0 2px 8px ${c.accentDim}`
        }}>
          {running ? (
            <>
              <Icon name="pause-circle" size={14} />
              {t.running}
            </>
          ) : (
            <>
              <Icon name="play-circle" size={14} />
              {t.run}
            </>
          )}
        </button>
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

        <button onClick={onPrev} title="Previous" className="btn-icon" style={iconBtnStyle(c)}>
          <Icon name="arrow-back" size={13} />
        </button>
        <button onClick={onNext} title="Next" className="btn-icon" style={iconBtnStyle(c)}>
          <Icon name="arrow-forward" size={13} />
        </button>
      </div>
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
