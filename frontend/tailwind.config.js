/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      primary: "Playfair Display",
      secondary: "Mulish",
    },
    fontSize: {
      sm: "0.8rem",
      base: "1rem",
      xl: "1.25rem",
      "2xl": "1.563rem",
      "3xl": "1.953rem",
      "4xl": "2.441rem",
      "5xl": "3.052rem",
    },
    screens: {
      xs: "475px", //mobile
      sm: "640px", //tablet
      md: "768px",
      lg: "1024px", //laptop
      xl: "1280px", //desktop
      "2xl": "1536px",
    },
    colors: {
      primary: "#673ab7",
      hoverPrimary: "#8259cb",
      secondary: "#703fc4",
      tertiary: "#442678",
      grayish: "#f8fafc",
      white: "#ffffff",
      dark: "#201238",
      darkHover: "#361e5f",
      lightGray: "#F3F4F6",
      darkGray: "#6B7280",
      blackish: "#2f2e41"
    },
    boxShadow: {
      sm: "0 2px 4px 0 rgb(0 0 0 / 0.05)",
    },
    extend: {},
  },
  plugins: [],
};
