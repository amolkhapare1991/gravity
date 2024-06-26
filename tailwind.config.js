/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      gridTemplateColumns: {
        'custom-fit': 'repeat(auto-fit, minmax(280px, 1fr))',
      },
      spacing: {
        '50': '50px',
      },
      colors: {
        'custom': 'rgb(78, 226, 226)',
        'custom-1': 'rgb(244 165 64)'
      }
    },
  },
  plugins: [],
};
