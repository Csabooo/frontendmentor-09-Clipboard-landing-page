/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        /* Primary */
        "strong-Cyan": "hsl(171, 66%, 44%)",
        "light-Blue": "hsl(233, 100%, 69%)",  
        /* Neutral */
        "dark-Grayish-Blue": "hsl(210, 10%, 33%)",
        "grayish-Blue": "hsl(201, 11%, 66%)"
      },
    },
    fontFamily: {
      'sans': ["Bai Jamjuree", "sans-serif"],
    }
 
  },
  plugins: [],
}