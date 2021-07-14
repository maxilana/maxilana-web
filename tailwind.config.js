module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    textColor: {
      primary: "#000F34",
      secondary: "#000F348A",
      disabled: "#0000003D",
      discount: "#C4C9CE",
    },
    borderRadius: {
      sm: "8px",
      DEFAULT: "24px",
    },
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        accent: {
          DEFAULT: "#FDDA2A",
          dark: "#F0CE21",
        },
        brand: {
          DEFAULT: "#005198",
          dark: "#0E5290",
        },
        surface: {
          DEFAULT: '#F4F5FB',
          dark: "#EBF1F6",
        },
        'action-primary': "#1E83E1",
        'action-secondary': "#1978D0",
        'action-critical': "#EF3A3ADE",
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
