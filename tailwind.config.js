module.exports = {
  mode:'jit',
  content: [],
  purge:[
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  darkMode:false,
  theme: {
    extend: {},
  },
  plugins: [],
}
