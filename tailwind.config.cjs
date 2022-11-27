/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');
const { formatPostcssSourceMap } = require('vite');

module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx,png}',
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
        'forest-image': "url('./src/assets/images/evgeni-evgeniev-LPKk3wtkC-g-unsplash.jpg')",
        'gradient': "linear-gradient(180deg, rgba(43,43,48,1) 0%, rgba(50,50,57,1) 30%, rgba(23,30,32,1) 77%);"
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
  plugins: [
    require("tailwind-fluid-typography"),
    require("tailwindcss-animated")
  ],
};
