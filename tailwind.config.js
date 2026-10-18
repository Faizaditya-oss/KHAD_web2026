/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        khad: {
          dark: '#061E14',
          card: '#0B2A1E',
          border: '#133E2B',
        },
        slate: {
          900: '#0F172A',
          800: '#1E293B',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['"Oswald"', 'sans-serif'],
        mono: ['"Oswald"', 'sans-serif'],
        'space-mono': ['"Oswald"', 'sans-serif'],
        body: ['"Plus Jakarta Sans"', 'sans-serif'],
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
}
