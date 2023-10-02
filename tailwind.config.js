/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        orbitron: ["Orbitron", "sans"],
        "roboto-mono": ["Roboto Mono", "monospace"],
      },
      colors: {
        pink: "#FD00FE",
        "pink-op10": "rgba(253, 0, 254, 0.1)",
        blue: "#54D2FF",
        "black-dark": "#1C1C1E",
        "black-dark-op80": "rgba(28, 28, 30, 0.8)",
        "black-medium": "#2C2C2E",
        "black-light": "#B4B5B7",
        white: "#FFFFFF",
        "white-op70": "rgba(255, 255, 255, 0.7)",
        red: "#F80866",
        green: "#D6FE5C",
        "gray-op90": "rgba(28, 28, 30, 0.9)",
        "gray-400": "#9f9f9f",
      },
      width: {
        343: "343px",
        228: "228px",
        263: "263px",
        204: "204px",
        262: "262px",
        150: "150px",
        396: "396px",
        157: "157px",
      },
      height: {
        324: "324px",
        108: "108px",
        444: "444px",
        30: "30px",
        204: "204px",
        537: "537px",
        856: "856px",
        488: "488px",
        147: "147px",
      },
      fontSize: {
        32: "32px",
      },
      backgroundImage: {
        // 'dashedborder': "url('data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' stroke='%23333' stroke-width='4' stroke-dasharray='6%2c 14' stroke-dashoffset='0' stroke-linecap='square'/%3e%3c/svg%3e')",
        run: "url('/src/assets/image/Activity/Run.png')",
        weight: "url('/src/assets/Weight-Training.png')",
        delete: "url('/src/assets/bgdelete.png')",
        bgpink:
          "url('data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='8' ry='8' stroke='%23FD00FEFF' stroke-width='4' stroke-dasharray='6%2c 14' stroke-dashoffset='0' stroke-linecap='square'/%3e%3c/svg%3e')",
      },
      padding: {
        26: "26px",
        55: "55px",
      },
      margin: {
        54: "54px",
      },
      strokeWidth: {
        25: "25px",
      },
      boxShadow: {
        box: "0 4px 4px 0px rgba(0, 0, 0, 0.25)",
      },
      spacing: {
        375: "375px",
        600: "600px",
      },
    },
  },
  plugins: [require("daisyui"), require("tailwindcss-animate"),],
};
