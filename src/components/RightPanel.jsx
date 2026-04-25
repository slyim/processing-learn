import { sectionIcons } from '../sketches';
import Icon from './Icon';

function SectionLabel({ label, c }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4 }}>
      <span style={{
        fontSize: 9.5, fontWeight: 700, letterSpacing: '0.12em',
        color: c.accent, fontFamily: 'Inter, sans-serif'
      }}>▸ {label}</span>
      <div style={{ flex: 1, height: 1, background: c.accentBorder, opacity: 0.4 }} />
    </div>
  );
}

function CourseOverview({ t, c, lesson, sectionNum, sectionTitle, moduleLabel, onCollapse }) {
  return (
    <div style={{
      background: c.overviewBg,
      borderTop: `1px solid ${c.border}`,
      display: 'flex', flexDirection: 'column', flexShrink: 0,
      flex: 1, minHeight: 0,
      overflow: 'hidden'
    }}>
      <div style={{
        display: 'flex', alignItems: 'center', gap: 8,
        padding: '0 8px 0 16px', height: 42, flexShrink: 0,
        borderBottom: `1px solid ${c.border}`,
        userSelect: 'none'
      }}>
        <span style={{
          fontSize: 10.5, fontWeight: 700, letterSpacing: '0.1em',
          color: c.textMuted, fontFamily: 'Inter, sans-serif'
        }}>{t.lessonOverview}</span>
        <div style={{ flex: 1 }} />
        {sectionNum && (
          <span style={{
            fontSize: 9.5, fontWeight: 700, letterSpacing: '0.04em',
            color: c.accent, background: c.accentDim,
            border: `1px solid ${c.accentBorder}`,
            padding: '2px 8px', borderRadius: 4
          }}>{sectionNum}</span>
        )}
        <button
          onClick={onCollapse}
          title="Collapse overview"
          aria-label="Collapse overview"
          className="sb-iconbtn"
          style={{
            background: 'none', border: `1px solid ${c.border}`, cursor: 'pointer',
            padding: '6px 8px', borderRadius: 6, color: c.textMuted,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            flexShrink: 0, minWidth: 30, minHeight: 28,
            ['--hover-color']: c.text
          }}
        >
          <Icon name="chevron-right" size={14} />
        </button>
      </div>

      <div style={{ overflowY: 'auto', flex: 1, padding: '14px 18px 18px' }}>
        <div style={{
          fontSize: 10, fontWeight: 700, letterSpacing: '0.1em',
          color: c.textMuted, fontFamily: 'Inter, sans-serif', marginBottom: 6,
          textTransform: 'uppercase'
        }}>{moduleLabel}</div>

        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14 }}>
          <div style={{
            width: 32, height: 32, borderRadius: 8,
            background: c.accentDim, border: `1px solid ${c.accentBorder}`,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            flexShrink: 0, fontSize: 16
          }}>
            {sectionIcons[lesson.id] || '📄'}
          </div>
          <h2 style={{
            margin: 0, fontSize: 20, fontWeight: 700,
            color: c.text, fontFamily: 'Inter, sans-serif', lineHeight: 1.15
          }}>{sectionTitle}</h2>
        </div>

        <SectionLabel label={t.lessonIntro.toUpperCase()} c={c} />
        <p style={{
          fontSize: 13, lineHeight: 1.65, color: c.textMuted,
          fontFamily: 'Inter, sans-serif', margin: '6px 0 14px'
        }}>{lesson.intro}</p>

        <SectionLabel label={t.lessonConcepts.toUpperCase()} c={c} />
        <ul style={{
          margin: '6px 0 14px', padding: 0, listStyle: 'none',
          display: 'flex', flexDirection: 'column', gap: 7
        }}>
          {lesson.concepts.map((concept, i) => (
            <li key={i} style={{
              display: 'flex', gap: 9, alignItems: 'flex-start'
            }}>
              <span style={{
                color: c.accent, flexShrink: 0,
                marginTop: 3, fontSize: 10
              }}>◆</span>
              <span style={{
                fontSize: 12.5, lineHeight: 1.6, color: c.textMuted,
                fontFamily: 'Inter, sans-serif'
              }}>{concept}</span>
            </li>
          ))}
        </ul>

        <div style={{
          background: c.tryBg, border: `1px solid ${c.tryBorder}`,
          borderRadius: 8, padding: '12px 14px'
        }}>
          <div style={{
            fontSize: 9.5, fontWeight: 700, letterSpacing: '0.1em',
            color: c.accent, marginBottom: 6, fontFamily: 'Inter, sans-serif'
          }}>▶ {t.lessonTryIt.toUpperCase()}</div>
          <p style={{
            margin: 0, fontSize: 12.5, lineHeight: 1.6,
            color: c.textMuted, fontFamily: 'Inter, sans-serif'
          }}>{lesson.tryIt}</p>
        </div>
      </div>
    </div>
  );
}

// Slim 40px-wide rail shown when the overview is collapsed. Mirrors the
// pattern used by the left Sidebar so the chrome reads as symmetric.
function CollapsedRail({ c, sectionNum, onExpand, label }) {
  return (
    <div style={{
      width: 40, height: '100%',
      background: c.panel,
      borderLeft: `1px solid ${c.border}`,
      display: 'flex', flexDirection: 'column', alignItems: 'center',
      padding: '10px 0', gap: 8, flexShrink: 0
    }}>
      <button
        onClick={onExpand}
        title="Expand overview"
        aria-label="Expand overview"
        style={{
          background: c.accentDim, border: `1px solid ${c.accentBorder}`,
          borderRadius: 6, color: c.accent, cursor: 'pointer', padding: 5,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          marginBottom: 2
        }}
      >
        <Icon name="chevron-left" size={16} />
      </button>
      <button
        onClick={onExpand}
        title="Lesson overview"
        aria-label="Lesson overview"
        className="sb-iconbtn"
        style={{
          background: 'none', border: 'none', cursor: 'pointer',
          padding: 7, borderRadius: 6, color: c.textMuted,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          ['--hover-color']: c.accent
        }}
      >
        <Icon name="book-open" size={16} />
      </button>
      {sectionNum && (
        <span style={{
          marginTop: 4,
          fontSize: 8.5, fontWeight: 700, letterSpacing: '0.04em',
          color: c.accent, background: c.accentDim,
          border: `1px solid ${c.accentBorder}`,
          padding: '2px 4px', borderRadius: 4,
          writingMode: 'vertical-rl',
          fontFamily: 'Inter, sans-serif'
        }}>{sectionNum}</span>
      )}
      {/* Vertical label so the rail is identifiable even when there's no
          section number to anchor it (e.g. user files). */}
      {label && (
        <div style={{
          marginTop: sectionNum ? 4 : 8,
          fontSize: 9.5, fontWeight: 700, letterSpacing: '0.18em',
          color: c.textMuted, fontFamily: 'Inter, sans-serif',
          writingMode: 'vertical-rl', transform: 'rotate(180deg)',
          userSelect: 'none', whiteSpace: 'nowrap'
        }}>{label}</div>
      )}
    </div>
  );
}

export default function RightPanel({ t, c, lesson, sectionNum, sectionTitle, moduleLabel, overviewCollapsed, setOverviewCollapsed, showOverview = true, hasActive }) {
  if (overviewCollapsed) {
    return (
      <CollapsedRail
        c={c}
        sectionNum={showOverview ? sectionNum : ''}
        label={t.lessonOverview}
        onExpand={() => setOverviewCollapsed(false)}
      />
    );
  }

  if (!showOverview) {
    return (
      <div style={{
        display: 'flex', flexDirection: 'column',
        background: c.panel,
        borderLeft: `1px solid ${c.border}`,
        flexShrink: 0, width: '100%', height: '100%',
        overflow: 'hidden'
      }}>
        <div style={{
          display: 'flex', alignItems: 'center', gap: 8,
          padding: '0 8px 0 16px', height: 42, flexShrink: 0,
          borderBottom: `1px solid ${c.border}`,
          userSelect: 'none'
        }}>
          <span style={{
            fontSize: 10.5, fontWeight: 700, letterSpacing: '0.1em',
            color: c.textMuted, fontFamily: 'Inter, sans-serif'
          }}>{t.lessonOverview}</span>
          <div style={{ flex: 1 }} />
          <button
            onClick={() => setOverviewCollapsed(true)}
            title="Collapse overview"
            aria-label="Collapse overview"
            className="sb-iconbtn"
            style={{
              background: 'none', border: `1px solid ${c.border}`, cursor: 'pointer',
              padding: '6px 8px', borderRadius: 6, color: c.textMuted,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              flexShrink: 0, minWidth: 30, minHeight: 28,
              ['--hover-color']: c.text
            }}
          >
            <Icon name="chevron-right" size={14} />
          </button>
        </div>
        <div style={{
          flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center',
          padding: 22, color: c.textMuted, textAlign: 'center'
        }}>
          <div style={{
            fontSize: 11.5, fontFamily: 'Inter, sans-serif', lineHeight: 1.5
          }}>
            {hasActive
              ? 'Lesson overview is hidden for your own files.'
              : 'Open a lesson to see its overview here.'}
          </div>
        </div>
      </div>
    );
  }
  return (
    <div style={{
      display: 'flex', flexDirection: 'column',
      background: c.panel,
      borderLeft: `1px solid ${c.border}`,
      flexShrink: 0, width: '100%', height: '100%',
      overflow: 'hidden'
    }}>
      <CourseOverview
        t={t} c={c}
        lesson={lesson}
        sectionNum={sectionNum}
        sectionTitle={sectionTitle}
        moduleLabel={moduleLabel}
        onCollapse={() => setOverviewCollapsed(true)}
      />
    </div>
  );
}
