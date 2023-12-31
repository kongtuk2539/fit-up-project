/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/react-tailwindcss-datepicker/dist/index.esm.js',
  ],
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
        'white-op40': 'rgba(255, 255, 255, 0.4)',
        'white-op20': 'rgba(255, 255, 255, 0.2)',
        red: '#F80866',
        green: '#D6FE5C',
        'gray-900': '#020202',
        'gray-400': '#7D7D7D',
        'gray-100': '#e9e9e9',
        'gray-op90': 'rgba(28, 28, 30, 0.9)',
      },
      borderWidth: {
        half: '0.5px',
        pink: '#FD00FE',
        'pink-op10': 'rgba(253, 0, 254, 0.1)',
        blue: '#54D2FF',
        'black-dark': '#1C1C1E',
        'black-dark-op80': 'rgba(28, 28, 30, 0.8)',
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
        343: '343px',
        228: '228px',
        263: '263px',
        204: '204px',
        262: '262px',
        150: '150px',
        396: '396px',
        157: '157px',
        721: '721px',
        311: '311px',
        419: '419px',
        254: '254px',
      },
      height: {
        324: '324px',
        108: '108px',
        444: '444px',
        30: '30px',
        204: '204px',
        537: '537px',
        856: '856px',
        488: '488px',
        147: '147px',
        65: '65px',
        343: '343px',
        240: '240px',
        721: '721px',
        375: '375px',
        311: '311px',
        228: '228px',
        254: '254px',
        263: '263px',
        415: '415px',
        419: '419px',
        1200: '1200px',
        1440: '1440px',
        512: '512px',
        156: '156px',
        136: '136px',
        768: '768px',
        15: '15px',
        508: '508px',
        104: '104px',
        174: '174px',
        127: '127px',
        1024: '1024px',
        430: '430px',
        41: '41px',
        373: '373px',
      },
      screens: {
        galaxy: '350px',
      },
      fontSize: {
        32: '32px',
      },
      backgroundImage: {
        run: "url('/src/assets/image/Activity/Run.png')",
        weight: "url('/src/assets/Weight-Training.png')",
        delete: "url('/src/assets/bgdelete.png')",
        bgdesktop: "url('/src/assets/image/BG/Bg-Desktop.png')",
        bgipad: "url('/src/assets/image/BG/Bg-Ipad.png')",
      },
      padding: {
        26: '26px',
        55: '55px',
      },
      margin: {
        54: '54px',
        56: '56px',
        40: '40px',
        81: '81px',
      },
      strokeWidth: {
        25: '25px',
      },
      boxShadow: {
        box: '0 4px 4px 0px rgba(0, 0, 0, 0.25)',
      },
      spacing: {
        375: '375px',
        600: '600px',
      },
    },
  },
  plugins: [require('daisyui'), require('tailwindcss-animate')],
};
