/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#ffffff",
        secondary: "#f5f5f5",
        danger: "",
        dark:"#111111",
        "dark-gray": "#aaaaaa",
      },
      textColor:{
        primary: "#111111",
        secondary: "#707072",
        danger: "",
        "dark-gray": "#635959",
      },
      spacing:{
        1.5:"6px",
        2.5:"10px",
        7.5:"30px",
        45: '180px',
        80: '320px',
        86: '344px',
        125: '500px',
        164: '656px',
        314: '1256px',
      }
    },
    screens: {
        'sm': '600px',
        'md': '960px',
    },
    fontFamily: {
      'helvetica-md': ["Helvetica Text Now Medium", "Helvetica", "Arial", "sans-serif"],
      'nike-gt': ["Nike GT"],
      'nike-futura': ["Nike Futura"],
      'nike-glyphs': ["Nike Glyphs"],
    }
  },
  plugins: [],
}

