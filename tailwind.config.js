/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      scale: ['group-hover'],
      fontFamily: { inter: ['Inter', 'sans-serif'] }
    }
  },
  plugins: [
    require('flowbite/plugin')
  ]
}
