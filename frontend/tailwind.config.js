/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      primary: "Playfair Display",
      secondary: "Mulish",
    },
    screens: {
      sm: "540px",
      md: "720px",
      lg: "960px",
      "lg-max": { max: "960px" },
      xl: "1140px",
      "2xl": "1320px",
    },
    colors: {
      primary: "#673ab7",
    },
    boxShadow: {
      sm: "0 2px 4px 0 rgb(0 0 0 / 0.05)",
    },
    extend: {
    },
  },
  plugins: [],
});