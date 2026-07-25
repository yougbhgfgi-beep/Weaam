/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Tajawal', 'sans-serif'],
        script: ['Great Vibes', 'cursive'],
      },
      colors: {
        primary: {
          50: '#f0f7ff',
          100: '#e0efff',
          200: '#b9d9f5',
          300: '#6C9CDA',
          400: '#5a8dc7',
          500: '#4a7db4',
          600: '#3a6da1',
          700: '#2a5d8e',
          800: '#1a4d7b',
          900: '#0a3d68',
        }
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        }
      }
    },
  },
  plugins: [],
}
