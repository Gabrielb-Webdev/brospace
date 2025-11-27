/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#7C3AED',
          dark: '#6D28D9',
          light: '#8B5CF6',
        },
        secondary: '#EC4899',
        accent: {
          blue: '#3B82F6',
          cyan: '#06B6D4',
        },
        bg: {
          dark: '#0A0118',
          darker: '#050010',
          card: '#1A0B2E',
          cardHover: '#2D1B4E',
        },
        text: {
          primary: '#FFFFFF',
          secondary: '#CBD5E1',
          muted: '#94A3B8',
        },
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
      boxShadow: {
        'glow-sm': '0 2px 8px rgba(124, 58, 237, 0.1)',
        'glow-md': '0 4px 20px rgba(124, 58, 237, 0.15)',
        'glow-lg': '0 8px 40px rgba(124, 58, 237, 0.25)',
        'glow-xl': '0 0 60px rgba(124, 58, 237, 0.4)',
      },
      animation: {
        'fade-in': 'fadeIn 0.3s ease-in-out',
        'slide-in': 'slideIn 0.3s ease-out',
        'float': 'float 20s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideIn: {
          '0%': { transform: 'translateY(-10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '33%': { transform: 'translate(100px, -50px) scale(1.1)' },
          '66%': { transform: 'translate(-50px, 100px) scale(0.9)' },
        },
      },
      transitionDuration: {
        'fast': '200ms',
        'normal': '400ms',
        'slow': '600ms',
      },
      transitionTimingFunction: {
        'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
    },
  },
  plugins: [],
}
