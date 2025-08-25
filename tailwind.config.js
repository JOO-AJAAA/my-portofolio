/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      animation: {
        marquee: 'marquee 5s linear infinite',
      },
      fontFamily: {
    poppins: ["Poppins", "sans-serif"],
    roboto: ["Roboto", "sans-serif"],
    comic: ['"Comic Sans MS"', 'cursive'],
      },
    },
  },
};


