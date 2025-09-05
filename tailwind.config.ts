import type { Config } from 'tailwindcss'

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Nueva paleta vibrante de Publixy
        'publixy-teal-dark': '#64B8CF',
        'publixy-teal': '#7BD3E2', 
        'publixy-gold': '#EFBD4A',
        'publixy-yellow': '#F5D757',
        // Colores base
        'publixy-charcoal': '#1a1a1a',
        'publixy-dark': '#32373c',
        'publixy-light': '#F3F4F6',
        // Legacy para compatibilidad
        'publixy-cyan': '#7BD3E2',
        'publixy-purple': '#EFBD4A',
        'publixy-turquoise': '#64B8CF',
        'publixy-blue': '#055A85',
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
        'mono': ['JetBrains Mono', 'monospace'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in',
        'slide-up': 'slideUp 0.3s ease-out',
        'counter': 'counter 2s ease-out',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        counter: {
          '0%': { transform: 'translateY(100%)' },
          '100%': { transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
} satisfies Config

