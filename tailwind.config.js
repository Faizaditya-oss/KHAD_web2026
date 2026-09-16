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
        heading: ['"Space Grotesk"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
        'space-mono': ['"Space Mono"', 'monospace'],
        body: ['"Plus Jakarta Sans"', 'sans-serif'],
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
}
