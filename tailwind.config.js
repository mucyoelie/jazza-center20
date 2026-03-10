/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          red: '#CC1414',
          dark: '#8B0000',
          light: '#FF3333',
        },
        bronze: '#CD7F32',
        silver: '#A8A9AD',
        platinum: '#1a1a2e',
        gold: '#FFD700',
        grafam: {
          blue: '#1d4ed8',
          dark: '#0f172a',
          navy: '#1e3a5f',
        }
      },
      fontFamily: {
        heading: ['Playfair Display', 'Georgia', 'serif'],
        body: ['Lato', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
