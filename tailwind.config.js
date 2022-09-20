module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    container: {
      // you can configure the container to be centered
      center: true,
      // default breakpoints but with 40px removed
      screens: {
        "2xl": "1200px",
      },
      // padding: {
      //   DEFAULT: '1rem',
      //   // sm: '2rem',
      // },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
