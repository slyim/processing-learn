import { useRef } from 'react';
import type { Theme } from '../types';

interface ResizeHandleProps {
  direction: 'vertical' | 'horizontal';
  onDrag: (delta: number) => void;
  t: Theme;
}

// Vertical/horizontal drag handle between panels. `onDrag` fires with pixel
// deltas; parent clamps and applies.
export default function ResizeHandle({ direction, onDrag, t }: ResizeHandleProps) {
  const dragging = useRef(false);
  const start = useRef(0);

  function onMouseDown(e: React.MouseEvent) {
    dragging.current = true;
    start.current = direction === 'vertical' ? e.clientX : e.clientY;
    e.preventDefault();
    document.body.style.cursor = direction === 'vertical' ? 'col-resize' : 'row-resize';
    document.body.style.userSelect = 'none';
    const onMove = (ev: MouseEvent) => {
      if (!dragging.current) return;
      const pos = direction === 'vertical' ? ev.clientX : ev.clientY;
      const delta = pos - start.current;
      start.current = pos;
      onDrag(delta);
    };
    const onUp = () => {
      dragging.current = false;
      document.body.style.cursor = '';
      document.body.style.userSelect = '';
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseup', onUp);
    };
    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseup', onUp);
  }

  const isV = direction === 'vertical';

  return (
    <div
      className="resize-handle"
      onMouseDown={onMouseDown}
      role="separator"
      aria-orientation={isV ? 'vertical' : 'horizontal'}
      style={{
        flexShrink: 0, zIndex: 5, position: 'relative',
        width: isV ? 5 : '100%',
        height: isV ? '100%' : 5,
        background: t.border,
        cursor: isV ? 'col-resize' : 'row-resize',
        transition: 'background 0.15s',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        ['--hover-bg' as string]: t.accent
      }}
    >
      <div style={{
        background: t.borderLight, borderRadius: 99,
        width: isV ? 2 : 24, height: isV ? 24 : 2,
        pointerEvents: 'none', opacity: 0.6
      }} />
    </div>
  );
}
