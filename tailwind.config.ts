import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        syne: ['var(--font-syne)', 'sans-serif'],
        mono: ['var(--font-dm-mono)', 'monospace'],
        cabinet: ['var(--font-cabinet)', 'sans-serif'],
      },
      colors: {
        black: '#000000',
        blue: {
          DEFAULT: '#2563EB',
          bright: '#3B82F6',
          glow: '#1D4ED8',
          dim: '#1e3a6e',
          muted: 'rgba(37,99,235,0.1)',
        },
        gray: {
          dark: '#0d0d0d',
          mid: '#1e1e1e',
          border: '#1a1a1a',
          text: '#6b7280',
          light: '#9ca3af',
        },
        slate: '#1a1a2e',
        charcoal: '#111111',
      },
      animation: {
        'blob-drift': 'blobDrift 18s ease-in-out infinite alternate',
        'scroll-pulse': 'scrollPulse 2s ease-in-out infinite',
        'glow-pulse': 'glowPulse 3s ease-in-out infinite',
        'status-pulse': 'statusPulse 2s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        blobDrift: {
          '0%': { transform: 'translate(0,0) scale(1)' },
          '33%': { transform: 'translate(60px,-40px) scale(1.05)' },
          '66%': { transform: 'translate(-30px,60px) scale(0.95)' },
          '100%': { transform: 'translate(40px,20px) scale(1.02)' },
        },
        scrollPulse: {
          '0%, 100%': { opacity: '0.3' },
          '50%': { opacity: '1' },
        },
        glowPulse: {
          '0%, 100%': { boxShadow: '0 0 12px rgba(37,99,235,0.4), 0 0 32px rgba(37,99,235,0.2)' },
          '50%': { boxShadow: '0 0 24px rgba(59,130,246,0.7), 0 0 60px rgba(37,99,235,0.35)' },
        },
        statusPulse: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.3' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
      },
      backgroundImage: {
        'grid-pattern': `linear-gradient(rgba(59,130,246,0.06) 1px, transparent 1px),
          linear-gradient(90deg, rgba(59,130,246,0.06) 1px, transparent 1px)`,
      },
      backgroundSize: {
        'grid': '40px 40px',
      },
    },
  },
  plugins: [],
}

export default config
