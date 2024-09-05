/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.html"],
  theme: {
    extend: {
      colors: {
        "strong-cyans": "hsl(171, 66%, 44%)",
        "light-blue": "hsl(233, 100%, 69%)",
        "dark-grayish-blue": "hsl(210, 10%, 33%)",
        "grayish-blue": "hsl(201, 11%, 66%)",
        footer: "hsla(201, 11%, 66%, 0.1002)",
      },
      boxShadow: {
        "download-ios":
          "0px -3px 0px 0px rgba(0, 0, 0, 0.15) inset, 0px 10px 20px 0px rgba(137, 229, 199, 0.50)",
        "download-mac":
          "0px -3px 0px 0px rgba(0, 0, 0, 0.15) inset, 0px 10px 20px 0px rgba(159, 159, 159, 0.50)",
      },
    },
  },
  plugins: [],
};
