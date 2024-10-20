/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue, js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        customPurple: '#5541BA',
        customPurple_o66: '#5541BA66',
        customPurple_o33: '#5541BA33',
        customLime: '#B1F532',
        customOrange: '#FF6316',
        customBlack: '#191921',
        customGreen: '#158466',
        customYellow: '#FEFE33',
        customRed: '#FE2712',
        customLightPurple: '#BAB0EF',
        customBlue: '#448DBE'
      },
      fontFamily: {
        myMedium: ['myMedium', 'sans-serif'],
        myUnbounded: ['myUnbounded', 'sans-serif'],
        mySoyuzGrotesk: ['mySoyuzGrotesk', 'sans-serif']
      },
      fontWeight: {
        light: 300,
        regular: 400,
        medium: 500,
        bold: 700
      }
    },
    /*создание собственных фоновых изображений*/
    backgroundImage: {
      myGoldenRatio: "url('/src/img/golden_ratio.svg')" /*первое фото главной страницы*/
    }
  },
  plugins: []
}
