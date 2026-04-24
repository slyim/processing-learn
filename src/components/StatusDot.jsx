// Four-state progress marker used in the course list.
//   done   → green filled circle with check (user has ticked it off)
//   active → orange dot with soft ring (current lesson, not yet marked done)
//   next   → hollow orange circle (up next)
//   locked → small grey dot
//
// When `onToggle` is passed the whole thing becomes a real <button> so the
// learner can manually mark a lesson complete (or un-complete it) by clicking.
export default function StatusDot({ status, t, onToggle, title }) {
  const inner = renderInner(status, t);

  if (onToggle) {
    return (
      <button
        type="button"
        onClick={(e) => { e.stopPropagation(); onToggle(); }}
        title={title || (status === 'done' ? 'Mark as not done' : 'Mark as done')}
        aria-label={title || (status === 'done' ? 'Mark as not done' : 'Mark as done')}
        style={{
          background: 'none', border: 'none', padding: 0, margin: 0,
          width: 18, height: 18, borderRadius: 4,
          display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
          cursor: 'pointer', color: 'inherit',
          flexShrink: 0
        }}
        className="status-dot-btn"
      >
        {inner}
      </button>
    );
  }

  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
      width: 14, height: 14, flexShrink: 0
    }}>
      {inner}
    </span>
  );
}

function renderInner(status, t) {
  if (status === 'done') {
    return (
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
        <circle cx="7" cy="7" r="6" fill={t.statusDone} />
        <path d="M4.4 7l2 2 3.2-3.2" stroke="#fff" strokeWidth="1.6"
          strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }
  if (status === 'active') {
    return (
      <span style={{
        width: 8, height: 8, borderRadius: '50%',
        background: t.statusActive,
        boxShadow: `0 0 0 3px ${t.accentDim}`
      }} />
    );
  }
  if (status === 'next') {
    return (
      <span style={{
        width: 7, height: 7, borderRadius: '50%',
        border: `1.5px solid ${t.statusActive}`, opacity: 0.75
      }} />
    );
  }
  return (
    <span style={{
      width: 6, height: 6, borderRadius: '50%', background: t.statusLocked
    }} />
  );
}
