/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', '"Plus Jakarta Sans"', 'system-ui', '-apple-system', 'sans-serif'],
        heading: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
        serif: ['Inter', '"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      colors: {
        navy: {
          950: '#07101E',
          900: '#0B192C',
          850: '#0E2841',
          800: '#132F4C',
          700: '#1E3E62',
          600: '#264A79',
          500: '#315C96',
        },
        ice: {
          50: '#F8FAFC',
          100: '#F0F6FB',
          150: '#E8F1F9',
          200: '#E2EBF4',
          300: '#D4E6F2',
        },
        brand: {
          50: '#f0f9ff',
          500: '#0284c7',
          600: '#0369a1',
          900: '#0c4a6e',
        }
      }
    },
  },
  plugins: [],
}
