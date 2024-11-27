/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#4DAFCE",
        primaryDark: "#096B9B",
        PrimaryLight: "#1EA2C6",
        primaryLighter:"#4DAFCE",
        secondaryDark:"#2F2B37",
        secondaryLight:"#717680",
        secondaryInvarsion:"#FAFAFA",
        secondaryLighted:"#F5F5F5",
      },
    },
  },
  plugins: [],
};
