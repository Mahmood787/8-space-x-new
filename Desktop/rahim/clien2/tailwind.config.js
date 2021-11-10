module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      textColor: {
        skin: {
          base: 'var(--color-text-base)',
          muted: 'var(--color-text-muted)',
          inverted: 'var(--color-text-inverted)',
        },
      },
      backgroundColor: {
        skin: {
          gradient1: 'var(--color-gradient1)',
          gradient2: 'var(--color-gradient2)',
        },
      },
    },
  },
  variants: {
    extend: {
      textColor: ['active', 'focus'],
      fill: ['hover', 'focus'],
    },
  },
  plugins: [],
};
