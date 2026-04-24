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

function CanvasPreview({ c, canvasRef, sectionNum }) {
  return (
    <div style={{
      flex: 1, background: c.canvasBg,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      position: 'relative', overflow: 'hidden', minHeight: 0, padding: '20px'
    }}>
      <div ref={canvasRef} style={{
        background: c.canvasFrame,
        borderRadius: 4,
        overflow: 'hidden',
        boxShadow: '0 4px 32px rgba(0, 0, 0, 0.5)',
        maxWidth: '100%', maxHeight: '100%'
      }} />
      <div style={{
        position: 'absolute', top: 10, left: 12,
        fontSize: 9.5, fontWeight: 700, letterSpacing: '0.1em',
        color: 'rgba(255,255,255,0.3)',
        fontFamily: '"JetBrains Mono", monospace'
      }}>
        PREVIEW{sectionNum ? ` · ${sectionNum}` : ''}
      </div>
    </div>
  );
}

function CourseOverview({ t, c, lesson, sectionNum, sectionTitle, moduleLabel, collapsed, setCollapsed }) {
  return (
    <div style={{
      background: c.overviewBg,
      borderTop: `1px solid ${c.border}`,
      display: 'flex', flexDirection: 'column', flexShrink: 0,
      maxHeight: collapsed ? 42 : '60%',
      minHeight: collapsed ? 42 : 200,
      transition: 'max-height 0.3s ease, min-height 0.3s ease',
      overflow: 'hidden'
    }}>
      <div
        onClick={() => setCollapsed(p => !p)}
        role="button"
        aria-expanded={!collapsed}
        style={{
          display: 'flex', alignItems: 'center', gap: 8,
          padding: '0 16px', height: 42, flexShrink: 0,
          borderBottom: collapsed ? 'none' : `1px solid ${c.border}`,
          cursor: 'pointer', userSelect: 'none'
        }}
      >
        <span style={{
          transform: collapsed ? 'rotate(-90deg)' : 'rotate(0deg)',
          transition: 'transform 0.2s', flexShrink: 0,
          display: 'inline-flex', color: c.textMuted
        }}>
          <Icon name="chevron-down" size={14} />
        </span>
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
      </div>

      {!collapsed && (
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
      )}
    </div>
  );
}

export default function RightPanel({ t, c, canvasRef, lesson, sectionNum, sectionTitle, moduleLabel, overviewCollapsed, setOverviewCollapsed, showOverview = true }) {
  return (
    <div style={{
      display: 'flex', flexDirection: 'column',
      background: c.panel,
      borderLeft: `1px solid ${c.border}`,
      flexShrink: 0, width: '100%', height: '100%',
      overflow: 'hidden'
    }}>
      <CanvasPreview c={c} canvasRef={canvasRef} sectionNum={sectionNum} />
      {showOverview && (
        <CourseOverview
          t={t} c={c}
          lesson={lesson}
          sectionNum={sectionNum}
          sectionTitle={sectionTitle}
          moduleLabel={moduleLabel}
          collapsed={overviewCollapsed}
          setCollapsed={setOverviewCollapsed}
        />
      )}
    </div>
  );
}
