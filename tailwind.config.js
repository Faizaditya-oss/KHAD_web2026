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
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0', transform: 'translateX(-12px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
      },
      animation: {
        'fade-in': 'fade-in 0.45s ease-out forwards',
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}
