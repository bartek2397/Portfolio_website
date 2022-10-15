/** @type {import('tailwindcss').Config} */

// const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  important: '#root',
  theme: {
    extend: {
      backgroundImage: {
        'nasa-image': "url('./src/assets/images/nasa-Q1p7bh3SHj8-unsplash.jpg')"
      },
      // fontFamily: {
      //   'orbitron': ['Orbitron', 'sans-serif' ],
      // },
      
    },
  },
  corePlugins: {
    // Remove Tailwind CSS's preflight style so it can use the MUI's preflight instead (CssBaseline).
    preflight: false,
  },
  plugins: [],
};
