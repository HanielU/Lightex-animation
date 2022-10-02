/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {
      fontFamily: {
        secondary: '"Montserrat", sans-serif',
        primary: '"Gilroy", sans-serif'
      },
      colors: {
        purple: {
          dark: "#4153AD",
          light: "#6B7CD3"
        },
        orange: "#FF6827",
        white: "#FFFADF"
      }
    }
  },
  plugins: [
    require("tailwindcss/plugin")(({ addUtilities }) => {
      addUtilities({
        ".tap-shrink": {
          "&:active": {
            transform: "scale(.9)"
          }
        }
      });
    })
  ]
};
