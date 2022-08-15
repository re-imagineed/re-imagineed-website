import styled from 'styled-components'
import { LogoBlackL } from '../components/Logo'
import _Head from '../components/Head'
import { device } from '../utils/media-breakpoints'
import { useMediaQuery } from 'react-responsive'
import { StyledContainer, StyledMain, StyledSection, StyledSectionContentWrapper, StyledSectionAnchor, StyledP1} from '../components/Styled'
import Footer from '../components/Footer'
import Header from '../components/Header'
import SubscribeBanner from '../components/SubscribeBanner'
import {AboutUs, StyledImageWrapper, StyledColumns} from './about'
import Image from 'next/image'
import Team from './team'

const StyledLogoWrapper = styled.div`
  display: column;
  justify-content: center;
  align-content: center;
  max-width: 100%;
  height: auto;
  margin: calc(2rem + 2vw);
`

function Home(props) {
    const isDesktop = useMediaQuery({
      query: `${device.laptop}`
    })

    return (
 
      <StyledContainer>
        <_Head/>
        <Header/>
        <StyledMain>
          <StyledSectionAnchor id={"home"} />
          <StyledSection index={0}>
            <StyledColumns style={{ margin: "calc(0.5rem + 1vw)", marginLeft: "0.5vw", padding: "calc(2rem + 0.2vw)" }}>
            
              <div style={{ marginTop: "6vw", marginRight: "1vw" }}>
                <StyledLogoWrapper>
                  <LogoBlackL />
                </StyledLogoWrapper>
                <StyledP1>
                  Re-Imagine Education, Inc. is a non-profit 501(c)(3) with a mission to attract BIPOC talent to education careers and leverage intentional pathways for retention, career grooming, and upward mobility through meaningful mentorship channels.
                </StyledP1>
              </div>

              <StyledImageWrapper style={{ marginTop: "5vw", width: "100%", border: "0" }}>
                <Image
                  width="2016"
                  height="1512"
                  src="/images/team1.jpeg"
                  alt="team1"
                />
              </StyledImageWrapper>
            </StyledColumns>
          </StyledSection>

          <StyledSectionAnchor id={"about_us"} />
          <div style={{ width: "100%", height: "20px" }}></div>
          <StyledSection index={1}>
            <StyledSectionContentWrapper>
                <AboutUs/>
            </StyledSectionContentWrapper>
          </StyledSection>

          <StyledSectionAnchor id={"our_team"} />
          <div style={{ width: "100%", height: "20px" }}></div>
          <StyledSection index={2}>
            <StyledSectionContentWrapper>
              <Team />
            </StyledSectionContentWrapper>
          </StyledSection>

          <StyledSectionAnchor id={"subscribe"} />
          <div style={{ width: "100%", height: "20px" }}></div>
          <StyledSection index={3}>
            <SubscribeBanner mailchimpURL={props.mailchimpURL} />
          </StyledSection>

        </StyledMain>
        <Footer isHomePage={true} />
      </StyledContainer>
    )
}

export async function getStaticProps() {
  return {
      props: {
          mailchimpURL: process.env.MAILCHIMP_URL
      }
  }
}

export default Home