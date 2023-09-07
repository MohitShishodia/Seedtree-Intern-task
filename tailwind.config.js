/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        steelblue: "#166b8e",
        black: "#000",
        gainsboro: "#d9d9d9",
      },
      spacing: {},
      fontFamily: {
        roboto: "Roboto",
      },
      borderRadius: {
        "4xl": "23px",
      },
    },
    fontSize: {
      base: "16px",
      "13xl": "32px",
      "45xl": "64px",
      "5xl": "24px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
