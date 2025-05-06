/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'roboto': ['Roboto', 'sans-serif'],
      },
      colors: {
        'space': {
          50: '#f0f4fd',
          100: '#dfe8fa',
          200: '#c5d5f7',
          300: '#9ab8f1',
          400: '#6b92e9',
          500: '#4a72e0',
          600: '#354fd4',
          700: '#2c40c2',
          800: '#28369e',
          900: '#111827',
          950: '#080b1a',
        },
        'accent': {
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8', // Added the missing accent-700 color
        },
        'success': {
          500: '#22c55e',
          600: '#16a34a',
        },
        'warning': {
          500: '#f59e0b',
          600: '#d97706',
        },
        'error': {
          500: '#ef4444',
          600: '#dc2626',
        }
      },
      backgroundImage: {
        'hero-pattern': "linear-gradient(rgba(8, 11, 26, 0.7), rgba(8, 11, 26, 0.8)), url('https://images.pexels.com/photos/2387793/pexels-photo-2387793.jpeg?auto=compress&cs=tinysrgb&w=1920')",
        'about-pattern': "linear-gradient(rgba(8, 11, 26, 0.8), rgba(8, 11, 26, 0.95)), url('https://images.pexels.com/photos/76969/cold-front-warm-front-hurricane-felix-76969.jpeg?auto=compress&cs=tinysrgb&w=1920')",
        'project-pattern': "linear-gradient(rgba(8, 11, 26, 0.9), rgba(8, 11, 26, 0.8)), url('https://images.pexels.com/photos/41006/satellite-soyuz-spaceship-space-station-41006.jpeg?auto=compress&cs=tinysrgb&w=1920')",
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
};