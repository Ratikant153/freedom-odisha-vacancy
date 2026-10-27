/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          50: '#f1f5fa',
          100: '#dde6f1',
          200: '#bccde2',
          700: '#1e3a64',
          800: '#142c4f',
          900: '#0b1f3a',
        },
        leaf: {
          50: '#f0f8f3',
          100: '#d9eee1',
          600: '#1f7a4a',
          700: '#17633b',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
