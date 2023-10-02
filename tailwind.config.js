/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        orbitron: ['Orbitron', 'sans'],
        'roboto-mono': ['Roboto Mono', 'monospace'],
      },
      colors: {
        pink: '#FD00FE',
        'pink-medium': '#FD33FE',
        'pink-light': '#FE66FE',
        'pink-op10': 'rgba(253, 0, 254, 0.1)',
        'pink-op20': 'rgba(253, 0, 254, 0.2)',
        'pink-op30': 'rgba(253, 0, 254, 0.3)',
        blue: '#54D2FF',
        'black-dark': '#1C1C1E',
        'black-medium': '#2C2C2E',
        'black-light': '#B4B5B7',
        white: '#FFFFFF',
        'white-op70': 'rgba(255, 255, 255, 0.7)',
        red: '#F80866',
        green: '#D6FE5C',
        'gray-900': '#020202',
        'gray-400': '#7D7D7D',
        'gray-100': '#e9e9e9',
        'gray-op90': 'rgba(28, 28, 30, 0.9)',
      },
      borderWidth: {
        'half': '0.5px',
      },
    },
  },
  plugins: [require('daisyui')],
};
