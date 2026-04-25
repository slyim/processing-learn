import { useEffect, useState } from 'react';
import { languages } from '../i18n';
import Icon from './Icon';

// Pill-style toggle group. Declared at module scope so React doesn't tear it
// down on every <Header> render (that would both reset any internal state and
// break react-hooks/static-components).
function ToggleGroup({ c, options, value, onChange, ariaLabel, small }) {
  return (
    <div
      role="group"
      aria-label={ariaLabel}
      style={{
        display: 'flex', background: c.panelAlt, border: `1px solid ${c.border}`,
        borderRadius: 7, padding: 3, gap: 2, flexShrink: 0
      }}
    >
      {options.map(o => {
        const active = value === o.value;
        return (
          <button
            key={o.value}
            onClick={() => onChange(o.value)}
            title={o.title}
            aria-pressed={active}
            style={{
              padding: small ? '4px 9px' : '4px 11px',
              borderRadius: 5, border: 'none', cursor: 'pointer',
              background: active ? c.accent : 'transparent',
              color: active ? '#fff' : c.textMuted,
              fontSize: small ? 11 : 11.5,
              fontWeight: active ? 700 : 600,
              fontFamily: 'Inter, sans-serif',
              display: 'flex', alignItems: 'center', gap: 5,
              letterSpacing: '0.01em',
              transition: 'all 0.15s',
              boxShadow: active ? '0 1px 4px rgba(0,0,0,0.18)' : 'none'
            }}
          >
            {o.icon}
            {o.label}
          </button>
        );
      })}
    </div>
  );
}

// Top bar: YTU logo + title, theme pill toggle, language pill toggle.
// At narrow widths we progressively shed the subtitle and the "Theme" label,
// so the toggles don't wrap over the title.
export default function Header({ theme, setTheme, lang, setLang, t, c }) {
  const [width, setWidth] = useState(() =>
    typeof window === 'undefined' ? 1200 : window.innerWidth);
  useEffect(() => {
    const onResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  const showSubtitle = width >= 780;
  const showThemeText = width >= 560;            // below this, Dark/Light shrink to icon-only
  const showTitle = width >= 380;                 // below this the title can hide, keeping toggles usable

  return (
    <header style={{
      display: 'flex', alignItems: 'center',
      padding: '0 14px', height: 52, flexShrink: 0,
      background: c.panel,
      borderBottom: `1px solid ${c.border}`,
      gap: 10, zIndex: 10, minWidth: 0
    }}>
      <div style={{
        width: 34, height: 34, borderRadius: 8, background: c.accent,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        flexShrink: 0
      }} aria-label="YTÜ Programlama">
        <span style={{
          fontSize: 11, fontWeight: 900, color: '#fff',
          fontFamily: 'Inter, sans-serif', letterSpacing: '-0.02em'
        }}>YTÜ</span>
      </div>

      {showTitle && (
        <div style={{ flex: 1, minWidth: 0, overflow: 'hidden' }}>
          <div style={{
            fontSize: 15, fontWeight: 700, color: c.accent,
            fontFamily: 'Inter, sans-serif', lineHeight: 1.1,
            letterSpacing: '-0.01em',
            whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis'
          }}>{t.title}</div>
          {showSubtitle && (
            <div style={{
              fontSize: 10.5, color: c.textMuted,
              fontFamily: 'Inter, sans-serif', marginTop: 2,
              letterSpacing: '0.01em',
              whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis'
            }}>{t.subtitle}</div>
          )}
        </div>
      )}
      {!showTitle && <div style={{ flex: 1, minWidth: 0 }} />}

      <div style={{ display: 'flex', alignItems: 'center', gap: 6, flexShrink: 0 }}>
        <ToggleGroup
          c={c}
          ariaLabel={t.themeLabel}
          value={theme}
          onChange={setTheme}
          options={[
            {
              value: 'dark',
              label: showThemeText ? t.themeDark : null,
              title: t.themeDark,
              icon: <Icon name="moon" size={12} />
            },
            {
              value: 'light',
              label: showThemeText ? t.themeLight : null,
              title: t.themeLight,
              icon: <Icon name="sun" size={12} />
            }
          ]}
        />
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: 6, flexShrink: 0 }}>
        <span
          aria-label={t.langLabel}
          title={t.langLabel}
          style={{
            display: 'inline-flex', alignItems: 'center',
            color: c.textMuted
          }}
        >
          <Icon name="globe" size={14} />
        </span>
        <ToggleGroup
          c={c}
          small
          ariaLabel={t.langLabel}
          value={lang}
          onChange={setLang}
          options={languages.map(l => ({
            value: l.code,
            label: l.code.toUpperCase(),
            title: l.label
          }))}
        />
      </div>
    </header>
  );
}
