/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1a2a2b",
        secondary: "#284243",
        textColor: "#333333",
        accentColor: "#d1ecf1",
        secondaryBackground: "#d1ecf1",
        facebook: "#1877F2",
        twitter: "#1DA1F2",
      },
    },
  },
  plugins: [],
};
