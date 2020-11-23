import Head from 'next/head'
import styled from 'styled-components'
import Footer from '../components/Footer'
import Main from '../components/Main'
import Header from '../components/Header'

export const config = {
  env: ['MAILCHIMP_URL']
}

const StyledContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100%;
  min-height: 100vh;
  width: 100%;

  background-color: ${props => props.theme.lightgrey};
`

function Home(props) {
  return (
    <StyledContainer>
      <Head>
        <title>Re-Imagine Education</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
      <Main mailchimpURL={props.main.mailchimpURL}/>
      <Footer/>
    </StyledContainer>
  )
}

export async function getStaticProps() {
  return {
    props: {
      main: {
        mailchimpURL: process.env.MAILCHIMP_URL
      }
    }
  }
}

export default Home