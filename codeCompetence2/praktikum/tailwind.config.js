/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      colors: {
        primary: '#155e75',
      },
      fontFamily: {
        fontMy: ['Mooli', 'sans'],
        fontHead: ['Dosis', 'sans'],
      },
    },
  },
  plugins: [],
};
