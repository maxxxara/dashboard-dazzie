/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      'xxs': {'max':'320px'},
      'xs': {'max':'370px'},
      'sm': {'max':'576px'},
      'md': {'max':'768px'},
      'lg': {'max':'1024px'},
      'xl': {'max':'1280px'},
      '2xl': {'max':'1536px'},
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'blue': '#5541D7',
      'green': '#42BDA1',
      'error': '#F04461',
      'lightBg': '#F7F7FC',
      'icon': '#9A9AB0',
      'gray1': '#DBD7F4',
      'grayText': '#92929D',
      'image': '#E2E2EA',
      'black': '#11142D',
      'grayBorder': '#E1E1E1',
      'white': '#ffffff',
    },
    fontFamily: {
      'poppins': 'poppins'
    }
},
  plugins: []
}