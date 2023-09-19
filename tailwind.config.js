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
        '343': '343px',
        // '60': '60px',
        '228': '228px',
        '263': '263px',
        // '30': '30px',
        // '406': '406px',
      },
      height: {
        '324': '324px',
        '108': '108px',
        // '60': '60px',
        '444': '444px',
        '30': '30px',
        // '337': '337px',
      },
      fontSize: {
        '32': '32px',
      },
      backgroundImage: {
        // 'dashedborder': "url('data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' stroke='%23333' stroke-width='4' stroke-dasharray='6%2c 14' stroke-dashoffset='0' stroke-linecap='square'/%3e%3c/svg%3e')",
        'run': "url('/src/assets/image/Activity/Run.png')",
        'weight': "url('/src/assets/Weight-Training.png')",
        'bgpink': "url('data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='8' ry='8' stroke='%23FD00FEFF' stroke-width='4' stroke-dasharray='6%2c 14' stroke-dashoffset='0' stroke-linecap='square'/%3e%3c/svg%3e')",
      },
    },
  },
  plugins: [require('daisyui')],
};
