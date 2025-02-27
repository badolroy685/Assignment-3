 /** @type {import('tailwindcss').Config} */
 export default {
    content: ["./src/**/*.{html,js}"],
    theme: {
      extend: {
      
      },
      keyframes: {
        move: {
          "50%" : {"translateY(-1rem)" }
        }
      }, 
      animation:{
        movingY: "move 3s linear infinite"
      }
    },
    plugins: [],
  }