/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');


module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Kumbh Sans", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: '#000d13',
        secondary: '#0c2936',
        tertiary: '#28535a',
        quaternary: '#468089',
        quinary: '#55a59e',
        black: '#000000',
        white: '#ffffff',
        gray: {
          100: '#f7fafc',
          200: '#edf2f7',
          300: '#e2e8f0',
          400: '#cbd5e0',
          500: '#a0aec0',
          600: '#718096',
        },
      
    },
    
    },
  },
  plugins: [],
}