/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      margin: {
        contain: "0 125px 0 222px",
      },
      dropShadow: {
        "3xl": "0px 4px 2px rgba(0,0,0,0.25)",
      },
      boxShadow: {
        "4xl": "0px 20px 40px rgba(0,0,0,0.1)",
        "5xl": "0px  10px 40px  rgba(0,0,0,0.1)",
      },
      fontFamily: {
        rubik: ["Rubik", "sans-serif"],
      },
      maxWidth: {
        405: "405px",
      },
      lineHeight: {
        70: "70px",
      },
      colors: {
        primary: "#21B573",
        secondary: "#2F2F2F",
        sub:"#CDCDCD",
        gray: "#585859",
        graylight: "#6C6B6B",
        orange: "#FD511A",
        violet: "#413960",
        violetlight: "#56548C",
        dark: "#000000",
        white: "#FFFFFF",
        black: "#282531",
      },
      backgroundColor: {
        primary: "#21B573",
        bluelight: "#F0FFF0",
      },
      borderRadius: {
        large: "33px",
      },
    },
  },

  plugins: [],
};
