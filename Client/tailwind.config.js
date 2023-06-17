/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        'registerbg': "url('./src/image/leftside.jpg')"
      }
    },
  },
  plugins: [],
}