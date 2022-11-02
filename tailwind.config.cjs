/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');
const { formatPostcssSourceMap } = require('vite');

module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './node_modules/hamburger-react/**/*.{js,ts}'
],
  important: '#root',
  theme: {
    screens: {
      'sm': {'max':'640px'},
      'md': {'max': '768px'},
      'lg': {'max': '1024px'},
      'xl': {'max': '1280px'},
      '2xl': {'max': '1536px'},
    },
    fluidTypography: {
        remSize: 16,
        minScreenSize: 320,
        maxScreenSize: 1920,
        minTypeScale: 1.2,
        maxTypeScale: 1.333,
        lineHeight: 1.35
    },
    extend: {
      backgroundImage: {
        'nasa-image': "url('./src/assets/images/nasa-Q1p7bh3SHj8-unsplash.jpg')",
        'stars-image': "url('./src/assets/images/nrd-6KuY0cXHymE-unsplash.jpg')",
        'space-image': "url('./src/assets/images/evgeni-evgeniev-LPKk3wtkC-g-unsplash.jpg')"
      },
      fontFamily: {
        'orbitron': ['Orbitron', 'sans-serif'],
      },
      
    },
  },
  corePlugins: {
    // Remove Tailwind CSS's preflight style so it can use the MUI's preflight instead (CssBaseline).
    preflight: false,
  },
  plugins: [require("tailwind-fluid-typography")],
};
