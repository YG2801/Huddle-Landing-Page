/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        pink: "#ff52bf",
        "light-pink": "#ff8fd8",
        "light-red": "#ff4242",
        "very-dark-cyan": "#00252e",
        "very-pale-blue": "#f5faff",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        "open-sans": ["Open Sans", "sans-serif"],
      },
      screens: {
        "very-sm": "380px",
      },
    },
  },
  plugins: [],
};
