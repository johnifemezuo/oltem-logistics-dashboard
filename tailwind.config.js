/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-color": "#020d54",
        "primaryText-color": "#4a4f72",
        "primaryHover-color": "#010f69",
        "primaryRing-color": "#cbd1fc",
        "border-color": "#e1e5e4",
        "danger-color": "#f91717",
        "app-bg": "#f3f5fe",
        "link-active": "#3e4a991f",
        "link-activeDropdown": "#7d83b617",
        "warning-color": "#abad0d",
        "success-color": "#05b829",
        "disabled-color": "#04103d38",
      },
    },
  },
  plugins: [],
};
