/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.html"],
  theme: {
    extend: {
      colors : {
        "kng" : ['#DAFE3C'],
        "ireng" : ['#131313'],
        "mera"   : ['#FF6D62'],
        "ijo"   : ['#39AA84'],
        "abutxt"   : ['#656565'],
        "abu"   : ['#313131']
      },
      fontFamily : {
        "poppins" : ['poppins'],
        "laila" : ['laila']
      }
    },
  },
  plugins: [],
}

