/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: { night: '#070a18', panel: '#0e1330', line: '#222a55', violet: '#8b7bff', sky: '#4fa3ff', aqua: '#2dd4bf' },
      fontFamily: { display: ['Sora', 'system-ui', 'sans-serif'], sans: ['Inter', 'system-ui', 'sans-serif'] },
    },
  },
  plugins: [],
}
