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
        nunito: ['Nunito', 'sans-serif'],
        'space-grotesk': ['Space Grotesk', 'sans-serif'],
        raleway: ['Raleway', 'sans-serif'],
        ralewayBold: ['Raleway-Bold', 'sans-serif'],
      },
      colors: {
        customColor: 'hsl(204, 23.8%, 95.9%)'
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(to right, rgb(59, 130, 246), rgb(37, 99, 235))'
      },
      animation: {
        'bounce-once': 'bounce-once 1s ease'
      }
    }
  },
  plugins: [
    require('flowbite/plugin'),
    require('tailwind-scrollbar'),
  ]
}
