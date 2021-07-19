const plugin = require('tailwindcss/plugin');

module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ['Inter', 'system-ui', 'sans-serif'],
      serif: ['ui-serif', 'Georgia', 'serif'],
      mono: ['ui-monospace', 'SFMono-Regular'],
    },
    fontSize: {
      xs: ['12px', '20px'],
      sm: ['14px', '24px'],
      base: ['16px', '28px'],
      lg: ['20px', '28px'],
      xl: ['24px', '29px'],
      '2xl': ['34px', '41px'],
      '3xl': ['48px', '58px'],
      '4xl': ['60px', '72px'],
      '5xl': ['96px', '116px'],
    },
    textColor: {
      white: '#FFFFFF',
      primary: '#000F34',
      secondary: '#000F348A',
      disabled: '#0000003D',
      discount: '#C4C9CE',
    },
    borderRadius: {
      sm: '8px',
      DEFAULT: '24px',
    },
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        accent: {
          light: '#FFF8D3',
          DEFAULT: '#FDDA2A',
          dark: '#F0CE21',
        },
        brand: {
          DEFAULT: '#005198',
          dark: '#0E5290',
        },
        surface: {
          light: '#F0F6FB',
          DEFAULT: '#F4F5FB',
          dark: '#EBF1F6',
        },
        'action-primary': '#1E83E1',
        'action-primary-light': '#C9E5FF',
        'action-secondary': '#1978D0',
        'action-critical': '#EF3A3ADE',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    plugin(function ({ addBase, theme }) {
      addBase({
        h1: { fontSize: theme('fontSize.5xl'), fontWeight: '600' },
        h2: { fontSize: theme('fontSize.4xl'), fontWeight: '600' },
        h3: { fontSize: theme('fontSize.3xl'), fontWeight: '600' },
        h4: { fontSize: theme('fontSize.2xl'), fontWeight: '600' },
        h5: { fontSize: theme('fontSize.xl'), fontWeight: '600' },
        h6: { fontSize: theme('fontSize.lg'), fontWeight: '600' },
      });
    }),
  ],
};
