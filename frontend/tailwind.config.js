/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // Enable class-based dark mode
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        primary: {
          100: '#baa7ff',
          200: '#754ffe',
          300: '#6343d8',
          400: '#583bbf'
        },
        secondary: {
          100: '#f1f5f9',
          200: '#64748b',
          300: '#1e293b',
          400: '##0f172a',
          500: '#0e1526'
        },
        // Dark mode colors
        dark: {
          primary: {
            100: '#544d7a',
            200: '#3e3270',
            300: '#312760',
            400: '#2c2157'
          },
          secondary: {
            100: '#0f172a',
            200: '#64748b',
            300: '#cbd5e1',
            400: '#1e293b',
            500: '#0b1324'
          }
        }
      },
    },
  },
  plugins: [],
}
