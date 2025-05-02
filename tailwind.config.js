/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./**/*.{js,ts,jsx,tsx}", //Your `content` configuration includes a pattern which looks like it's accidentally matching all of `node_modules` and can cause serious performance issues. 
    // Consider creating a src folder if planning to expand site.
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}