/**  @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        primary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
        },
        pastel: {
          pink: '#ffd6e0',
          lavender: '#e1d5e7',
          mint: '#d0f0c0',
          peach: '#ffe5b4',
          sky: '#c1e3ff',
          lilac: '#c8a2c8',
          lemon: '#fffacd',
          blush: '#ffb6c1',
        },
      },
    },
  },
  plugins: [],
};
 