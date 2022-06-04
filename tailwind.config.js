module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        "dark-alter": {
          primary: "#8d9ec6",
          secondary: "#4cf7ee",
          accent: "#8396db",
          neutral: "#202D37",
          "base-100": "#27354F",
          info: "#4D9AD5",
          success: "#1ADBA4",
          warning: "#EFAE15",
          error: "#F64737",
        },
      },
      "dark",
      "winter",
    ],
  },
  plugins: [require("daisyui")],
};
