/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        button:'#0A77AC',
        primary:'#0A77AC',
        text:'#252B37',
        subtext:'#717680',
        textWhite:'#FAFAFA',
        gray:'#F5F5F5',
        textLink:'#6172F3',
        Darkbg:'#0A77AC',
        border:'#A4A7AE',
      },
      backgroundImage: {
        'text-bg': "url('/images/text-bg.png')",
      },
    },
  },
  plugins: [],
};
