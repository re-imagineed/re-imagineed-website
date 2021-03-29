import { createGlobalStyle, ThemeProvider } from 'styled-components'

const theme = {
  navy: '#012E55',
  lightgrey: '#EDEDED',
  grey: '#CCCCCC',
  lightblue: '#409AE9',
  greyblue: '#E0E7ED',
  yellow: '#FFCB11',
  white: '#FFFFFF',
  green: '#41A87F',
  orange: '#F8A645',
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
    margin: 0;
    padding: 0;
    font-family: Helvetica Neue, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    color: ${theme.navy};
    line-height: 150%;
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
