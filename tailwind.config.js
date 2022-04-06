module.exports = {
  mode:'jit',
  content:[
    "./components/**/*.vue",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
  ],
  // darkMode:false,
  theme: {
    extend: {},
  },
  daisyui: {
    themes: ["night"],
  },
  plugins: [require("@tailwindcss/typography"),require("daisyui")],
}
