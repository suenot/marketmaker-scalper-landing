/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        bg: {
          primary: '#0a0b0f',
          secondary: '#10121a',
          card: '#141620',
          hover: '#1a1d2a',
        },
        accent: {
          green: '#00d4a0',
          'green-dim': '#00a07a',
          red: '#ff4757',
          blue: '#4da6ff',
          yellow: '#ffd93d',
          purple: '#a855f7',
          cyan: '#06b6d4',
          orange: '#f97316',
        },
        border: {
          DEFAULT: '#1e2235',
          light: '#252840',
        },
        text: {
          primary: '#e8eaf0',
          secondary: '#8892a4',
          muted: '#728090',
        },
      },
      fontFamily: {
        mono: ['JetBrains Mono', 'Fira Code', 'Cascadia Code', 'monospace'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'float': 'float 6s ease-in-out infinite',
        'ticker': 'ticker 30s linear infinite',
      },
      keyframes: {
        glow: {
          '0%': { boxShadow: '0 0 5px #00d4a040' },
          '100%': { boxShadow: '0 0 20px #00d4a080, 0 0 40px #00d4a030' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        ticker: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      backgroundImage: {
        'grid': "linear-gradient(rgba(0,212,160,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,212,160,0.03) 1px, transparent 1px)",
        'hero-glow': 'radial-gradient(ellipse 80% 50% at 50% -20%, rgba(0,212,160,0.15), transparent)',
        'card-gradient': 'linear-gradient(135deg, rgba(0,212,160,0.05) 0%, transparent 100%)',
      },
      backgroundSize: {
        'grid': '40px 40px',
      },
    },
  },
  plugins: [],
};
