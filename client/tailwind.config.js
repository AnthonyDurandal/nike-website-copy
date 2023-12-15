/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "ffffff",
        secondary: "#f5f5f5",
        danger: ""
      },
      textColor:{
        primary: "#111111",
        secondary: "#707072",
        danger: ""
      }
    },
    screens: {
        'sm': '600px',
        'md': '1000px',
      },
  },
  plugins: [],
}

