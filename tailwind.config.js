/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      inter: ['Inter'],
      play: ['Press Start 2P', 'cursive'],
    },
    fontSize: {
      test1: '1rem',
      test2: '.875rem',
    },
    extend: {
      backgroundImage: {
        star: "url('./src/assets/images/star.png')",
        redArrow: "url('./src/assets/images/red.png')",
        purpleArrow: "url('./src/assets/images/purple.png')",
        yellowArrow: "url('./src/assets/images/yellow.png')",
        greenArrow: "url('./src/assets/images/green.png')",
        midBoard: "url('./src/assets/images/center.png')",
        wallpaper: "url('./src/assets/images/background.jpg')",
        charbg: "url('./src/assets/images/charbg.jpg')",
      },
    },
  },
  plugins: [],
};
