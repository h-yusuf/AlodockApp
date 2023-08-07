/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors : {
        "kng" : ['#DAFE3C'],
        "mera"   : ['#FF6D62'],
        "ijo"   : ['#39AA84'],
        "abutxt"   : ['#656565'],
      },
      fontFamily : {
        "poppins" : ['poppins'],
        "laila" : ['laila']
      }
    },
  },
  plugins: [],
}

