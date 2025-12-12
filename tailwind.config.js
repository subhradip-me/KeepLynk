/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
        'spin-slow': 'spin 8s linear infinite',
        'shimmer': 'shimmer 2s ease-in-out infinite',
        'float': 'float 3s ease-in-out infinite',
        'float-delayed': 'float 3s ease-in-out infinite 1s',
        'float-slow': 'float 4s ease-in-out infinite 2s',
        'expand-width': 'expandWidth 2s ease-out forwards 1s',
        'morph': 'morph 8s ease-in-out infinite',
        'slide-in-left': 'slideInLeft 1s ease-out',
        'slide-in-right': 'slideInRight 1s ease-out',
        'bounce-slow': 'bounce 3s infinite',
      },
      keyframes: {
        fadeInUp: {
          '0%': {
            opacity: '0',
            transform: 'translateY(30px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        shimmer: {
          '0%': {
            transform: 'translateX(-100%)',
          },
          '100%': {
            transform: 'translateX(100%)',
          },
        },
        float: {
          '0%, 100%': {
            transform: 'translateY(0px)',
          },
          '50%': {
            transform: 'translateY(-20px)',
          },
        },
        expandWidth: {
          '0%': {
            transform: 'scaleX(0)',
          },
          '100%': {
            transform: 'scaleX(1)',
          },
        },
        morph: {
          '0%, 100%': {
            borderRadius: '50% 20% 50% 20%',
          },
          '25%': {
            borderRadius: '20% 50% 20% 50%',
          },
          '50%': {
            borderRadius: '50% 50% 50% 50%',
          },
          '75%': {
            borderRadius: '30% 70% 30% 70%',
          },
        },
        slideInLeft: {
          '0%': {
            transform: 'translateX(-100%)',
            opacity: '0',
          },
          '100%': {
            transform: 'translateX(0)',
            opacity: '1',
          },
        },
        slideInRight: {
          '0%': {
            transform: 'translateX(100%)',
            opacity: '0',
          },
          '100%': {
            transform: 'translateX(0)',
            opacity: '1',
          },
        },
      },
      animationDelay: {
        '0': '0ms',
        '75': '75ms',
        '100': '100ms',
        '150': '150ms',
        '200': '200ms',
        '300': '300ms',
        '500': '500ms',
        '700': '700ms',
        '1000': '1000ms',
        '2000': '2000ms',
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}
