/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.html"],
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
// "npx tailwindcss -i ./src/input.css -o ./dist/output.css --watch"

