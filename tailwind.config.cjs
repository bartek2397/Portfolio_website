/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');
const { formatPostcssSourceMap } = require('vite');

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  important: '#root',
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
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
  plugins: [],
};
