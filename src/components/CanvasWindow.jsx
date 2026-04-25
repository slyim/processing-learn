import { useEffect, useRef, useState, useCallback } from 'react';
import Icon from './Icon';

const POS_KEY = 'studio-canvas-pos';

function loadPos() {
  try {
    const raw = localStorage.getItem(POS_KEY);
    if (!raw) return null;
    const p = JSON.parse(raw);
    if (p && Number.isFinite(p.x) && Number.isFinite(p.y)) return p;
  } catch { /* ignore */ }
  return null;
}

// Floating Processing-style sketch window. Draggable from the title bar,
// closeable, with a "focus" mode that fills the viewport. Not resizable —
// matches Processing's own windows where size() in code controls the canvas
// dimensions.
export default function CanvasWindow({ c, canvasRef, title, hasActive, sectionNum, isOpen, setIsOpen }) {
  const [pos, setPos] = useState(() => loadPos() || { x: -1, y: 80 });
  const [isFocused, setIsFocused] = useState(false);
  const dragState = useRef(null);
  const containerRef = useRef(null);

  // First mount with no saved position: nudge to top-right corner.
  useEffect(() => {
    if (pos.x < 0) {
      const w = window.innerWidth;
      setPos({ x: Math.max(20, w - 460), y: 80 });
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (pos.x >= 0) localStorage.setItem(POS_KEY, JSON.stringify(pos));
  }, [pos]);

  // Esc exits focus mode.
  useEffect(() => {
    if (!isFocused) return;
    const onKey = (e) => { if (e.key === 'Escape') setIsFocused(false); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [isFocused]);

  const onDragStart = useCallback((e) => {
    if (isFocused) return;
    if (e.button !== 0) return;
    e.preventDefault();
    const rect = containerRef.current.getBoundingClientRect();
    dragState.current = {
      offsetX: e.clientX - rect.left,
      offsetY: e.clientY - rect.top
    };
    const onMove = (ev) => {
      if (!dragState.current) return;
      const x = ev.clientX - dragState.current.offsetX;
      const y = ev.clientY - dragState.current.offsetY;
      const maxX = window.innerWidth - 80;
      const maxY = window.innerHeight - 60;
      setPos({
        x: Math.max(-40, Math.min(maxX, x)),
        y: Math.max(56, Math.min(maxY, y))
      });
    };
    const onUp = () => {
      dragState.current = null;
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseup', onUp);
    };
    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseup', onUp);
  }, [isFocused]);

  // When the preview is closed there's no floating "show preview" pill — the
  // Run icon at the top of the editor toolbar reopens (and starts) the sketch
  // in one click, matching the way Processing's own Run button behaves.
  if (!isOpen) return null;

  const wrapperStyle = isFocused
    ? {
        // Cinema mode: heavy backdrop blur so whatever's behind the sketch
        // melts away and the canvas feels stage-lit. A soft radial highlight
        // adds depth without competing with the artwork.
        position: 'fixed', inset: 0, zIndex: 60,
        background: 'radial-gradient(120% 80% at 50% 35%, rgba(249,115,22,0.18), rgba(0,0,0,0.78) 65%)',
        backdropFilter: 'blur(28px) saturate(160%)',
        WebkitBackdropFilter: 'blur(28px) saturate(160%)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        padding: 32, flexDirection: 'column', gap: 12,
        animation: 'cinema-fade-in 0.32s ease-out'
      }
    : {
        position: 'fixed', left: pos.x, top: pos.y, zIndex: 40,
        background: c.panel,
        border: `1px solid ${c.border}`, borderRadius: 8,
        boxShadow: c.shadow,
        display: 'flex', flexDirection: 'column'
      };

  return (
    <div ref={containerRef} style={wrapperStyle}>
      <div
        onMouseDown={onDragStart}
        style={{
          display: 'flex', alignItems: 'center', gap: 8,
          padding: '6px 8px 6px 12px',
          background: isFocused ? 'transparent' : c.panelAlt,
          borderBottom: isFocused ? 'none' : `1px solid ${c.border}`,
          borderTopLeftRadius: 7, borderTopRightRadius: 7,
          cursor: isFocused ? 'default' : 'grab',
          userSelect: 'none', minWidth: 280,
          color: isFocused ? '#e3e1dc' : c.text
        }}
      >
        <span style={{
          display: 'inline-flex', color: c.accent,
          fontSize: 9, letterSpacing: '0.1em'
        }}>●</span>
        <span style={{
          fontSize: 11.5, fontWeight: 600,
          fontFamily: '"JetBrains Mono", monospace',
          flex: 1, whiteSpace: 'nowrap',
          overflow: 'hidden', textOverflow: 'ellipsis'
        }}>{title}</span>
        {sectionNum && !isFocused && (
          <span style={{
            fontSize: 9, fontWeight: 700, letterSpacing: '0.04em',
            color: c.accent, background: c.accentDim,
            border: `1px solid ${c.accentBorder}`,
            padding: '1px 6px', borderRadius: 4
          }}>{sectionNum}</span>
        )}
        <button
          onClick={() => setIsFocused(f => !f)}
          title={isFocused ? 'Exit cinema (Esc)' : 'Cinema mode'}
          aria-label={isFocused ? 'Exit cinema mode' : 'Enter cinema mode'}
          className="btn-icon"
          style={titleBtn(c, isFocused)}
        >
          <Icon name={isFocused ? 'close' : 'expand'} size={12} />
        </button>
        {!isFocused && (
          <button
            onClick={() => setIsOpen(false)}
            title="Close preview"
            aria-label="Close preview"
            className="btn-icon"
            style={titleBtn(c, false)}
          >
            <Icon name="close" size={12} />
          </button>
        )}
      </div>
      <div style={{
        background: isFocused ? 'transparent' : c.canvasBg,
        padding: isFocused ? 32 : 12,
        borderBottomLeftRadius: 7, borderBottomRightRadius: 7,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        flex: isFocused ? 1 : '0 0 auto',
        width: isFocused ? '100%' : 'auto',
        minHeight: isFocused ? 0 : 'auto',
        overflow: 'hidden'
      }}>
        <div
          ref={canvasRef}
          className={`canvas-frame ${isFocused ? 'canvas-frame--focus' : ''}`}
          style={{
            background: isFocused ? 'transparent' : c.canvasFrame,
            display: hasActive ? 'flex' : 'none',
            alignItems: 'center', justifyContent: 'center'
          }}
        />
        {!hasActive && (
          <div style={{
            padding: '24px 28px',
            fontSize: 11.5, color: c.textMuted,
            fontFamily: 'Inter, sans-serif',
            textAlign: 'center', maxWidth: 240
          }}>Open a sketch to see it here.</div>
        )}
      </div>
    </div>
  );
}

function titleBtn(c, dark) {
  return {
    background: 'transparent',
    border: 'none',
    borderRadius: 4,
    cursor: 'pointer',
    padding: '4px 6px',
    color: dark ? 'rgba(255,255,255,0.8)' : c.textMuted,
    display: 'flex', alignItems: 'center',
    transition: 'background 0.12s, color 0.12s',
    ['--hover-color']: dark ? '#fff' : c.text,
    ['--hover-border']: 'transparent'
  };
}
