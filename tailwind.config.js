const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: [
    // '**/templates/**/*.html',
    // '**/blocks/**/*.py',
    // '**/models.py',
      '*.{html,js}',
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      borderRadius: {
        '4xl': '2rem',
        '5xl': '3rem',
        '6xl': '5rem',
      },
      fontFamily: {
        sans: 'var(--font-inter)',
        display: ['Cabinet Grotesk', ...defaultTheme.fontFamily.sans],
      },
    },
    aspectRatio: {
      auto: 'auto',
      square: '1 / 1',
      video: '16 / 9',
      1: '1',
      2: '2',
      3: '3',
      4: '4',
      5: '5',
      6: '6',
      7: '7',
      8: '8',
      9: '9',
      10: '10',
      11: '11',
      12: '12',
      13: '13',
      14: '14',
      15: '15',
      16: '16',
    },
  },
  corePlugins: {
    aspectRatio: false,
  },
  plugins: [
      require('@tailwindcss/forms'),
      require('@tailwindcss/aspect-ratio'),
      require('@tailwindcss/typography'),
  ],
}
