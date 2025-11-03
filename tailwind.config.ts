import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0073FF',
          dark: '#0056CC',
          light: '#3399FF',
          50: '#E6F2FF',
          100: '#CCE5FF',
          200: '#99CCFF',
          300: '#66B2FF',
          400: '#3399FF',
          500: '#0073FF',
          600: '#0056CC',
          700: '#003D99',
          800: '#002966',
          900: '#001433',
        },
        accent: {
          DEFAULT: '#21B34A',
          dark: '#1A8F3B',
          light: '#4DC975',
          50: '#E8F8ED',
          100: '#D1F1DB',
          200: '#A3E3B7',
          300: '#75D593',
          400: '#4DC975',
          500: '#21B34A',
          600: '#1A8F3B',
          700: '#136B2C',
          800: '#0D471D',
          900: '#06240F',
        },
        background: {
          DEFAULT: '#FDFDFB',
          dark: '#F8F8F6',
        },
        dark: {
          DEFAULT: '#1a1a1a',
          light: '#2a2a2a',
          lighter: '#3a3a3a',
        },
      },
      fontFamily: {
        sans: ['var(--font-open-sans)', 'Open Sans', 'sans-serif'],
        heading: ['var(--font-poppins)', 'Poppins', 'sans-serif'],
        display: ['var(--font-rajdhani)', 'Rajdhani', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'slide-down': 'slideDown 0.6s ease-out',
        'scale-in': 'scaleIn 0.5s ease-out',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.9)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
    },
  },
  plugins: [],
}
export default config
