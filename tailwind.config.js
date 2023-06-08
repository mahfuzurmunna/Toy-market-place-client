/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        gilroy: ["'Gilroy", "san-serif"],
        sacramento: ["Sacramento", "cursive"],
      },
      colors: {
        primary: "#0F1606",
        accent: "#3C6344",
        accent2: "#F3771C",
        bg: "#eeeee6",
        para: "#383838",
        bg2: "#D6DFC6",
        accent3: "#FDC153",
      },
      backgroundImage: {
        "bg-nav": "url('/src/assets/nav.png')",
        "bg-nav2": "url('/src/assets/nav2.png')",
        "bg-nav3": "url('/src/assets/nav3.png')",
      },
    },
  },
  plugins: [require("daisyui")],
};

