/** @type {import("tailwindcss").Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/lib/esm/**/*.js"
  ],
  theme: {
    fontFamily: {
      "arial": ["Arial", "ui-sans-serif", "ui-serif", "system-ui"]
    },
    extend: {
      colors: {
        primary: {
          1: '#000000',
          2: '#FFFFFF',
          3: '#0B1997',
          4: '#00528E',
          5: '#FFFFFF',
        },
        accent: {
          1: '#51565A',
          2: '#022860',
          3: '#F0F0F0',
          background: '#E2EFF2'
        },
      },
    },
  },
  plugins: [
    require("flowbite/plugin")
  ],
}

