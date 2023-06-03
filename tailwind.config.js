/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite'
      },
      scale: ['group-hover'],
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        slabo: ['Slabo', 'serif'],
        nunito: ['Nunito', 'sans-serif']
      }
    }
  },
  plugins: [
    require('flowbite/plugin')
  ]
}
