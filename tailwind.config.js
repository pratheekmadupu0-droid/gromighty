/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#050810',
          900: '#070B14',
          850: '#0B1020',
          800: '#11182A',
          700: '#1A243B',
          600: '#263452',
        },
        primary: {
          DEFAULT: '#00F0FF',
          dark: '#00B8C4',
          light: '#70F6FF',
          blue: '#0066FF',
        },
        accent: {
          DEFAULT: '#00A3FF',
          cyan: '#00F0FF',
          emerald: '#10B981',
          indigo: '#6366F1',
        },
        slate: {
          850: '#151E2E',
        },
        muted: '#A7B0C0',
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
        display: ['"Plus Jakarta Sans"', 'sans-serif'],
      },
      fontSize: {
        'hero': ['clamp(2.5rem, 6vw, 5.5rem)', { lineHeight: '1.05', letterSpacing: '-0.03em' }],
        'hero-sub': ['clamp(1.125rem, 2vw, 1.35rem)', { lineHeight: '1.6' }],
        'h2': ['clamp(2.1rem, 4vw, 3.75rem)', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'h3': ['clamp(1.5rem, 2.5vw, 2.25rem)', { lineHeight: '1.2' }],
      },
      backgroundImage: {
        'grid-pattern': 'radial-gradient(circle at 50% 50%, rgba(0, 240, 255, 0.05) 0%, transparent 60%)',
        'noise-pattern': 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.8\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\' opacity=\'0.03\'/%3E%3C/svg%3E")',
      },
      boxShadow: {
        'subtle-glow': '0 0 30px -5px rgba(0, 240, 255, 0.12)',
        'card-glow': '0 10px 30px -10px rgba(0, 0, 0, 0.5), 0 0 1px 1px rgba(255, 255, 255, 0.08)',
        'card-hover': '0 20px 40px -15px rgba(0, 240, 255, 0.15), 0 0 1px 1px rgba(0, 240, 255, 0.3)',
      },
      animation: {
        'pulse-subtle': 'pulse 6s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'flow-line': 'flowLine 3s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        flowLine: {
          '0%': { strokeDashoffset: '100' },
          '100%': { strokeDashoffset: '0' },
        }
      }
    },
  },
  plugins: [],
}

