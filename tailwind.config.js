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
        'pink-op10': 'rgba(253, 0, 254, 0.1)',
        blue: '#54D2FF',
        'black-dark': '#1C1C1E',
        'black-medium': '#2C2C2E',
        'black-light': '#B4B5B7',
        white: '#FFFFFF',
        'white-op70': 'rgba(255, 255, 255, 0.7)',
        red: '#F80866',
        green: '#D6FE5C',
        'gray-op90': 'rgba(28, 28, 30, 0.9)',
        'gray-400': '#9f9f9f',
      },
      width: {
        204: '204px',
        343: '343px',
      },
      height: {
        204: '204px',
        537: '537px',
      },
      padding: {
        26: '26px',
      },
      margin: {
        54: '54px',
      },
    },
  },
  plugins: [require('daisyui')],
};
