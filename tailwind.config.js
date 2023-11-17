const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./pages/**/*.js", "./components/**/*.js"],
  theme: {
    screens: {
      'phone': { 'max': '400px' },
      // ... other screen sizes
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      boxShadow: {
        sm: "5px 5px 5px rgba(0, 0, 0, 0.5)",
        "3xl": "0 65px 90px -11px rgba(0, 0, 0, 0.5)",
      },
      colors: {
        "royal-black": "#6E6969",
      },
      borderRadius: {
        large: "12px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
