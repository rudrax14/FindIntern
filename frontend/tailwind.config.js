/** @type {import('tailwindcss').Config} */
export default {
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
      },
    },
  },
  plugins: [],
}

