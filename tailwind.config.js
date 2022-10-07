/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/layouts/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        rubik: ["Rubik", "sans-serif"],
      },
      container: {
        padding: {
          DEFAULT: "1rem",
          sm: "1rem",
          md: "1rem",
          lg: "0rem",
          xl: "0rem",
          "2xl": "0rem",
        },
      },
      colors: {
      }
    },
  },
  plugins: [
    require("@thoughtbot/tailwindcss-aria-attributes"),
    require('@headlessui/tailwindcss')
  ],
};
