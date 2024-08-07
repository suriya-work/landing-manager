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
        grayLight: '#cfcde4',
        grayDark:'#2f3349',
      },
      backgroundImage: {
        'gradient-to-r': 'linear-gradient(to right, #28c76f 0%, #5a4aff 47.92%, #ff3739 100%)',
      },
      textColor: {
        'gradient-from': '#28c76f',
        'gradient-via': '#5a4aff',
        'gradient-to': '#ff3739',
      },
      
    },
    // backgroundImage:{},
    container: {
      center: true,
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
  ],
}