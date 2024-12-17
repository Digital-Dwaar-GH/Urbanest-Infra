/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}", // Add these paths to include React files
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
        raleway: ['Raleway', 'sans-serif'],
        openSans: ['Open Sans', 'sans-serif'],
        sourceSansPro: ['Source Sans Pro', 'sans-serif'],
      },
      fontSize: {
        h1: ['48px', { lineHeight: '1.2' }],
        h2: ['32px', { lineHeight: '1.3' }],
        h3: ['26px', { lineHeight: '1.4' }],
        body: ['18px', { lineHeight: '1.6' }],
      },
      colors: {
        rblack: {
          '50': '#f4f2f2',
          '100': '#e3dfde',
          '200': '#c9c0bf',
          '300': '#aa9b9a',
          '400': '#917e7e',
          '500': '#827070',
          '600': '#6f5f60',
          '700': '#5a4e50',
          '800': '#4e4547',
          '900': '#453e40',
          '950': '#2e282a',
        },
        whitek: {
          '50': '#fbfbfb',
          '100': '#efefef',
          '200': '#dcdcdc',
          '300': '#bdbdbd',
          '400': '#989898',
          '500': '#7c7c7c',
          '600': '#656565',
          '700': '#525252',
          '800': '#464646',
          '900': '#3d3d3d',
          '950': '#292929',
        },
        gray: {
          '50': '#f8f7f8',
          '100': '#f2f1f2',
          '200': '#e6e4e5',
          '300': '#d2cfd2',
          '400': '#b5b1b4',
          '500': '#9d979b',
          '600': '#8b8589',
          '700': '#6e686c',
          '800': '#5c585b',
          '900': '#4f4c4e',
          '950': '#2d2a2c',
        },
      },
    },
  },
  plugins: [],
}
