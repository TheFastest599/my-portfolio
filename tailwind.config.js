/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      colors: {
        shark: '#2b2d35',
        'international-orange': '#f75a06',
        'quill-gray': '#e3e3e2',
        zest: '#e57b34',
        manhattan: '#f7c7a2',
        nobel: '#b5b4b4',
        pharlap: '#a08b85',
        'gray-chateau': '#a2a5a7',
        'azure-radiance': '#0a97f9',
      },
      width: {
        88: '22rem',
        112: '28rem',
        128: '32rem',
      },
      maxHeight: {
        88: '22rem',
        112: '28rem',
        128: '32rem',
      },
      maxWidth: {
        88: '22rem',
        112: '28rem',
        128: '32rem',
        '8xl': '90rem',
      },
      screens: {
        msm: '414px',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        bebas: ['Bebas Neue', 'cursive'],
      },
    },
  },
  plugins: [],
};
