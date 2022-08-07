/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        custom: ["Söhnemono kräftig", "sans-serif"],
        custom1: ["Italianplateno1expanded", "sans-serif"],
      },
      animation: {
        rollin: "rollin 1s ease-in",
      },
      keyframes: {
        rollin: {
          "0%,100%": {
            transform: "scaleX(0)",
          },
          "100%": { transform: "scaleX(1)" },
        },
      },
    },
    screens: {
      sm: "576px",
      // => @media (min-width: 576px) { ... }

      md: "768px",
      // => @media (min-width: 960px) { ... }

      lg: "960px",
      // => @media (min-width: 1440px) { ... }
    },
  },
  plugins: [],
};
