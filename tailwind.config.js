/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {},
      animation:{},
      colors: {
        bgColor: '#2f3349',
        purple: '#1e2130',
        purpleLight:'#685dd8',
        gray: '#25273a',
        grayLight:'#cfcde4',
      },
      
    },
    backgroundImage:{},
    container: {
      center: true,
    },
  },
  plugins: [],
}