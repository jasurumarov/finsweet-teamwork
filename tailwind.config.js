module.exports = {
  content: ['./*.html', './pages/*.html'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1320px',
    },
    extend: {
      colors: {
        colorFirst: '#70C174',
        colorSecond: '#BEF3C0',
        colorThird: '#EFF7F2',
        colorFourth: '#0B0706',
        colorFifth: '#1D2130',
        colorSixth: '#525560',
        colorSeventh: '#EBF0F9',
        colorEighth: '#E5E5E5',
      },
      backgroundImage: {
        'bx-x': "url('/images/homeBottom/bx-x.svg')",
        'homeBottom-secondBg': "url('/images/homeBottom/second-bg.png')",
      },  
    },
    fontFamily: {
      roboto: ['Roboto'],
    },
    fontFamily: {
      roboto700: ['Roboto700'],
    }
  },
  plugins: [],
}

