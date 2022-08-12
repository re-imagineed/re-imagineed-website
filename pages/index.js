import styled from 'styled-components'
import { LogoBlackL } from '../components/Logo'
import _Head from '../components/Head'
import { device } from '../utils/media-breakpoints'
import { useMediaQuery } from 'react-responsive'
import { StyledContainer, StyledMain, StyledSection, StyledSectionContentWrapper, StyledSectionAnchor, StyledP1, StyledP2, StyledP3, StyledDividerLine} from '../components/Styled'
import Footer from '../components/Footer'
import Header from '../components/Header'
import SubscribeBanner from '../components/SubscribeBanner'
import AboutUs from './about'
import Image from 'next/image'
import Team from './team'

const StyledLogoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  // margin: auto;
  // height: auto;
  // width: auto;
  // min-width: 100vw;
  max-width: 100%;
  height: auto;
  margin: calc(2rem + 2vw);
  // margin: 30px 0px 30px 0px;

  // @media ${device.tablet} {
  //   margin: 40px 0px 40px 0px;
  // }

  // @media ${device.laptop} {
  //   margin: 40px 100px 40px 150px;
  // }
`

const StyledBigImageWrapper = styled.div`
  display: flex;
  max-width: 100%;
  margin: auto;
  height: auto;
  align-content: center;

  @media ${device.laptop} {
    // max-width: 1024px;
    // min-width: 200px;
    margin: ${props => props.justified == "right" ? "0px 0px 0px 10px" : "0px 10px 0px 0px"};
  }
`

const StyledColumns = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
  justify-content: center;
  padding: calc(4rem + 0.2vw);
  margin: calc(0.1rem + 1vw);
  height: auto;
  margin-left: 0;

  .h1-fluid {
    padding: 4vw;
    font-size: calc(1rem + 1vw);
    line-height: calc(1rem + 1vw);
    font-weight: bold;
    margin-left: 4vw;
  }

  .p-fluid {
    font-size: calc(1rem + 0.3vw);
    line-height: calc(1rem + 0.8vw);
  }

  @media ${device.tablet} {
    flex-direction: column;
  }

  @media ${device.laptop} {
    flex-direction: row;
 }
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
            <StyledColumns>
                  <div class="h1-fluid">Re-Imagine Education, Inc.</div>
                  <div class="p-fluid">
                    Re-Imagine Education, Inc. is a non-profit 501(c)(3) with a mission to attract BIPOC talent to education careers and leverage intentional pathways for retention, career grooming, and upward mobility through meaningful mentorship channels.
                  </div>
                  <StyledLogoWrapper>
                    <LogoBlackL />
                  </StyledLogoWrapper>
                <StyledBigImageWrapper>
                  <Image
                    width="975"
                    height="731"
                    src="/images/team1.jpeg"
                    alt="team1"
                  />
                </StyledBigImageWrapper>
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