/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    colors: {
      white: "#ffffff",
      transparent: 'transparent',

      "primary-darkest": "#170F2E",
      "primary-darker": "#312163",
      "primary-dark": "#5531A7",
      "primary-default": "#9251F7",
      "primary-light": "#C696FC",
      "primary-lighter": "#EFE2F9",
      "primary-lightest": "#F8F2FC",

      "secondary-darker": "#1F2347",
      "secondary-dark": "#2A337E",
      "secondary-default": "#516CF7",
      "secondary-light": "#95AAFB",
      "secondary-lighter": "#E1E7FE",
      "secondary-lightest": "#F5F7FF",

      "gray-darkest": "#232339",
      "gray-darker": "#2E2E48",
      "gray-dark": "#47516B",
      "gray-default": "#79819A",
      "gray-light": "#ACB1C3",
      "gray-lighter": "#D9DFE8",
      "gray-lightest": "#E2E6EE",
    },
    extend: {},
  },
  plugins: [],
};
