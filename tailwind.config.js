module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto", "san-serif"],
        red_rose: ['"Red Rose"', "san-serif"],
        arial: ["Arial", "Helvetica", "sans-serif"],
      },
      boxShadow: {
        form: "4px 4px 4px rgba(0, 0, 0, 0.25)",
      },
    },
  },
  plugins: [],
};
