/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-color": "#033163",
        "primary-colorTwo": "#A9518B",
        "primaryText-color": "#4a4f72",
        "primaryHover-color": "#010f69",
        "primaryRing-color": "#cbd1fc",
        "border-color": "#e1e5e4",
        "danger-color": "#f91717",
        "app-bg": "#fff5fc",
        "link-active": "#3e4a991f",
        "link-activeDropdown": "#f7ebf3",
        "warning-color": "#abad0d",
        "success-color": "#05b829",
        "disabled-color": "#04103d38",
        "bg-light-pink": "#F9E9FF",
        "bg-light-green": "#E2FFE7",
        "bg-light-blue": "#F3F5FE",
        "bg-light-red": "#FFDBDB",
      },
    },
  },
  plugins: [],
};
