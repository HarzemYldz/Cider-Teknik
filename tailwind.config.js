/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#4f46e5', // Mor-mavi
          dark: '#312e81',
          light: '#a5b4fc',
        },
        secondary: {
          DEFAULT: '#fbbf24', // Sarı
          dark: '#f59e0b',
          light: '#fde68a',
        },
        bg: {
          light: '#f3f6fb',
          lighter: '#e0e7ef',
          dark: '#181c2a',
          darker: '#10131c',
        },
        glass: {
          light: 'rgba(255,255,255,0.65)',
          dark: 'rgba(24,28,42,0.65)',
        },
        heading: {
          light: '#181c2a',
          dark: '#e0e7ef',
        },
        text: {
          light: '#232946',
          dark: '#e0e7ef',
        },
        border: {
          light: '#e0e7ef',
          dark: '#232946',
        },
        dark: {
          DEFAULT: '#1F2937',
          lighter: '#374151',
          darker: '#111827',
        }
      },
      fontFamily: {
        sans: ['Comfortaa', 'Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
} 