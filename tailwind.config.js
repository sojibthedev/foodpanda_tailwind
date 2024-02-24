/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      backgroundImage : {
        'topimg' : "url('/img/bg1.jpg')",
        'btmimg' : "url('/img/bg2.jpg')",
      },
    },
  },
  plugins: [],
}

