import { createGlobalStyle, ThemeProvider } from 'styled-components'

const theme = {
  // #8 Primary Colors With a Vibrant Twist of https://www.canva.com/learn/100-color-combinations/
  sky: '#375e97',
  sunset: '#fb6542',
  sunflower8: '#ffbb00',
  grass: '#3f681c',

  // #12 Surf & Turf of https://www.canva.com/learn/100-color-combinations/
  sandstone: '#f4cc70',
  burnt_orange: '#de7a22',
  sea: '#20948b',
  lagoon: '#6ab187',

  // #23 Surf & Turf of https://www.canva.com/learn/100-color-combinations/
  blue: '#4d85bd',
  leafy_green: '#7caa2d',
  sunflower23: '#f5e356',
  seeds: '#cb6318',

  // #28 Garden Fresh of https://www.canva.com/learn/100-color-combinations/
  carrot: '#ee693f',
  tangerine: '#f69454',
  off_white28: '#fcfdfe',
  pear_green: '#739f3d',

  // #37 Sunny Citrus of https://www.canva.com/learn/100-color-combinations/
  citrus: '#faaf08',
  grapefruit: '#fa812f',
  ruby_red: '#fa4032',
  off_white37: '#fef3e2',

  // #44 Wintery Reds of https://www.canva.com/learn/100-color-combinations/
  berry: '#a10115',
  cherry: '#d72c16',
  chiffon: '#f0efea',
  smoke: '#c0b2b5',

  navy: '#012E55',
  lightgrey: '#EDEDED',
  grey: '#CCCCCC',
  lightblue: '#409AE9',
  greyblue: '#E0E7ED',
  yellow: '#FFCB11',
  white: '#FFFFFF',
  green: '#41A87F',
  orange: '#FFA500',
  red: '#CF4749'
}

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  h1 {
    font-size: 2em;
        line-height: 1em;

  }

  html, body {
    width: 100%;
    // height: 100%
    margin: 0;
    padding: 0;
    // overflow-x: hidden;
    font-family: Helvetica Neue, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    color: ${theme.navy};
    line-height: 150%;;
 
  }

  button {
    font-family: Helvetica Neue, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  }

  button:hover {
    opacity: 80%;
  }

  a {
    display: flex;
    align-items: center;
    color: inherit;
    text-decoration: none;

    cursor: pointer;

    transition: opacity 0.15s;
  }

  a:hover {
    opacity: 80%;
  }

  ::marker {
    text-indent: 20px;
  }
`

function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

export default App
