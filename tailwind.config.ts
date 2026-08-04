import type { Config } from 'tailwindcss';

/**
 * Nosvra design tokens.
 *
 * `ink`, `harbor` and `mint` are lifted directly from the company pitch deck
 * (#162238 navy, #1C7293 teal, #4FD9C7 mint) so the site and the deck read as
 * one identity. Everything else (violet / amber / rose / emerald / orange) uses
 * Tailwind's stock scales and is applied as a *category* accent — see
 * `lib/accents.ts` for the mapping.
 *
 * Surface colours are driven by CSS custom properties declared in
 * `styles/globals.css` so light and dark themes swap without duplicate classes.
 */
const config: Config = {
  darkMode: 'class',
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './lib/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'rgb(var(--color-background) / <alpha-value>)',
        surface: 'rgb(var(--color-surface) / <alpha-value>)',
        'surface-2': 'rgb(var(--color-surface-2) / <alpha-value>)',
        border: 'rgb(var(--color-border) / <alpha-value>)',
        'border-strong': 'rgb(var(--color-border-strong) / <alpha-value>)',
        foreground: 'rgb(var(--color-foreground) / <alpha-value>)',
        muted: 'rgb(var(--color-muted) / <alpha-value>)',
        subtle: 'rgb(var(--color-subtle) / <alpha-value>)',
        ink: {
          50: '#F4F6FA',
          100: '#E5EAF2',
          200: '#C7D2E2',
          300: '#9AACC6',
          400: '#6B81A2',
          500: '#4C6183',
          600: '#31456B',
          700: '#1B2A4A',
          800: '#162238',
          900: '#101A2B',
          950: '#0A111C',
        },
        harbor: {
          50: '#EFF7FA',
          100: '#D8EDF4',
          200: '#B0DAE8',
          300: '#7CC0D6',
          400: '#4AA1BE',
          500: '#2A87A6',
          600: '#1C7293',
          700: '#185C77',
          800: '#174C61',
          900: '#163F51',
          950: '#0C2836',
        },
        mint: {
          50: '#EEFCF9',
          100: '#D2F7F0',
          200: '#A8EFE4',
          300: '#6FE1D3',
          400: '#4FD9C7',
          500: '#21B9A7',
          600: '#159588',
          700: '#14776E',
          800: '#155F59',
          900: '#164F4A',
          950: '#05302E',
        },
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['var(--font-display)', 'var(--font-sans)', 'sans-serif'],
        mono: ['var(--font-mono)', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      fontSize: {
        '2xs': ['0.6875rem', { lineHeight: '1rem' }],
      },
      letterSpacing: {
        tightest: '-0.045em',
      },
      maxWidth: {
        prose: '68ch',
      },
      screens: {
        xs: '420px',
      },
      boxShadow: {
        card: '0 1px 2px rgb(15 23 42 / 0.04), 0 8px 24px -12px rgb(15 23 42 / 0.10)',
        lift: '0 2px 4px rgb(15 23 42 / 0.05), 0 18px 40px -20px rgb(15 23 42 / 0.22)',
      },
      transitionTimingFunction: {
        out: 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
    },
  },
  plugins: [],
};

export default config;
