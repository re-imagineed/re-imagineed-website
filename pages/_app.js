import { createGlobalStyle, ThemeProvider } from 'styled-components'


const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  html, body {
    margin: 0;
    padding: 0;
    font-family: Helvetica Neue, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  }

  button {
    font-family: Helvetica Neue, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  a:hover {
    opacity: 80%;
  }
`

const theme = {
  navy: '#012E55',
  lightgrey: '#EDEDED',
  grey: '#CCCCCC',
  lightblue: '#409AE9',
  yellow: '#F1C012',
  white: '#FFFFFF',
  green: '#41A87F',
  orange: '#F8A645',
  red: '#CF4749'
}

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
