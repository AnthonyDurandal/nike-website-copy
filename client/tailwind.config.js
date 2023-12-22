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
        86: '344px',
        314: '1256px'
      }
    },
    screens: {
        'sm': '600px',
        'md': '1000px',
      },
  },
  plugins: [],
}

