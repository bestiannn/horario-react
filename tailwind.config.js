module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'sans': ['ui-sans-serif', 'system-ui'],
      "retro": ['"Press Start 2P"', 'ui-monospace']
    },
    extend: {
      width: {
        'hora': '10%',
        'ramo': '18%'
      }
     }

  },
  variants: {
    extend: {},
  },
  plugins: [],
}
