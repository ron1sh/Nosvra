import { ImageResponse } from 'next/og';

import { site } from '@/lib/data/site';

export const alt = `${site.name} — ${site.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

/**
 * Social card. Generated at build time so it always matches the brand tokens
 * rather than drifting from a hand-exported PNG.
 */
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          background: '#0E131A',
          backgroundImage:
            'radial-gradient(circle at 1px 1px, rgba(190,214,235,0.10) 1px, transparent 0)',
          backgroundSize: '28px 28px',
          padding: '72px',
          color: '#E7EDF4',
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 18 }}>
          <svg width="44" height="44" viewBox="0 0 24 24" fill="none">
            <path d="M4.25 19.25V4.75" stroke="#E7EDF4" strokeWidth="2.6" strokeLinecap="round" />
            <path d="M19.75 19.25V4.75" stroke="#E7EDF4" strokeWidth="2.6" strokeLinecap="round" />
            <path d="M4.25 4.75 19.75 19.25" stroke="#4FD9C7" strokeWidth="2.6" strokeLinecap="round" />
          </svg>
          <span style={{ fontSize: 26, letterSpacing: 6, fontWeight: 600 }}>NOSVRA</span>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 22 }}>
          <div style={{ fontSize: 62, lineHeight: 1.08, letterSpacing: -2, maxWidth: 880 }}>
            Helping businesses grow through the right technology
          </div>
          <div style={{ fontSize: 26, color: '#9CB0C5', maxWidth: 760 }}>
            We don’t start by selling software. We start by understanding your business.
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            gap: 28,
            fontSize: 20,
            color: '#6B7F96',
            borderTop: '1px solid #212B37',
            paddingTop: 24,
          }}
        >
          <span>Websites</span>
          <span>Catalog software</span>
          <span>Business systems</span>
          <span>Automation</span>
        </div>
      </div>
    ),
    size,
  );
}
