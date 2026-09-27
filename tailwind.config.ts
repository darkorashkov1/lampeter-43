/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: '#0D1631',
        rosegold: '#B79274',
        cream: '#F4F2ED',
      },
    },
  },
  plugins: [],
}