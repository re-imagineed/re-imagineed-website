import Head from 'next/head'
import styled from 'styled-components'
import Footer from '../components/Footer'
import ComingSoonBanner from '../components/ComingSoonBanner'
import Main from '../components/Main'

const StyledContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100%;
  min-height: 100vh;
  width: 100%;

  background-color: ${props => props.theme.lightgrey};
`

export default function Home() {
  return (
    <StyledContainer>
      <Head>
        <title>Re-Imagine Education</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main/>
      <Footer/>
    </StyledContainer>
  )
}
