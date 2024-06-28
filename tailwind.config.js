/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        "2xs": "320px",
        "xsm": "420px"
      },
      fontFamily:{
        RubikBlack: ["RubikBlack"],
        RubikExtraBold: ["RubikExtraBold"],
        RubikBold: ["RubikBold"],
        RubikSemiBold: ["RubikSemiBold"],
        RubikMedium: ["RubikMedium"],
        RubikRegular: ["RubikRegular"],
      }
    },
  },
  plugins: [],
}

