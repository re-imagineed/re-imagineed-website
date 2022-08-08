import styled from 'styled-components'
import { LogoBlackL } from '../components/Logo'
import _Head from '../components/Head'
import { device } from '../utils/media-breakpoints'
import { useMediaQuery } from 'react-responsive'
import { StyledContainer, StyledMain, StyledSection, StyledSectionContentWrapper, StyledSectionAnchor, StyledP1, StyledP2, StyledP3, StyledDividerLine} from '../components/Styled'
import Footer from '../components/Footer'
import Header from '../components/Header'
import SubscribeBanner from '../components/SubscribeBanner'
import { Team,  AboutUs } from './about'
import Image from 'next/image'

const StyledFeatureSection = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: left;
  align-items: center;

  width: 100%;

  background-image: none;
  background-color: ${props => props.theme.grapefruit};

  @media ${device.tablet} {
    min-height: 400px;
    width: 100%;

    // background-image: url("/images/team1.jpeg");
    // background-size: fill;
    // background-position: right center;
    // background-repeat: no-repeat;
    // background-blend-mode: normal;
  }
`

const StyledFeatureContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  align-content: center;
  width: 30%;
  min-height: 500px;
  margin-top:
  margin: 20px;
  padding: 40px;

  background-color: ${props => props.theme.grapefruit};
  border: 10px solid ${props => props.theme.off_white37};
  h1 {
    font-size: 2em;
    line-height: 1em;
    margin-top: 0px;
    margin-left: 100px;
  }

  p {
    line-height: 1.4em;
    margin-bottom: 40px;
  }

  @media ${device.tablet} {
    width: 50%;
    min-height: 700px;
    padding: 80px;
  }

  @media ${device.laptop} {
    flex-direction: column;

    h1 {
      font-size: 2.8em;
      line-height: 1em;
    }

    p {
      line-height: 1.4em;
      margin-bottom: 0px;
    }
  }
`

export const StyledContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media ${device.laptop} {
    flex-direction: row;
  }
`

const StyledLogoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  min-width: 100px;
  max-width: 400px;
  // margin: 30px 0px 30px 0px;

  @media ${device.tablet} {
    margin: 40px 0px 40px 0px;
  }

  @media ${device.laptop} {
    margin: 40px 100px 40px 150px;
  }
`

const StyledBigImageWrapper = styled.div`
  display: flex;
  max-width: 1200px;
  min-width: 200px;
  margin: 20px 0;
  height: auto;
  align-content: center;

  @media ${device.laptop} {
    max-width: 1024px;
    min-width: 200px;
    margin: ${props => props.justified == "right" ? "0px 0px 0px 10px" : "0px 10px 0px 0px"};
  }
`

const Styled2Columns = styled.div`
  flex-direction: column;
  align-items: left;
  margin-bottom: 10px;
  align-content: left;
  font-weight: normal;
  font-size: 1.2em;
  margin-top: 50px;
  margin-bottom: 0px;
  padding: 10px;

  h1 {
    font-size: 2em;
    line-height: 1em;
    margin-top: 50px;
    margin-left: 150px;
  }

  p {
    line-height: 1.5em;
    margin-bottom: 30px;
  }

  .left {
    float: left;
    width: 45%;
    padding: 30px;
    height: 740;
    justify-content: center;
    align-content: center;;
    // border: 5px solid ${props => props.theme.off_white37};
  }

  .right {
    float: left;
    width: 55%;
    padding: 0px;
    height: 740;
    justify-content: center;
    align-content: center;
    // background-color: ${props => props.theme.grapefruit};

  }

  /* Clear floats after the columns */
  .row:after {
    content: "";
    display: flex;
    clear: both;
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
              <Styled2Columns>
                <div class="left">
                  <h1>Re-Imagine Education, Inc.</h1>
                  <StyledP1>
                    Re-Imagine Education, Inc. is a non-profit 501(c)(3) with a mission to attract BIPOC talent to education careers and leverage intentional pathways for retention, career grooming, and upward mobility through meaningful mentorship channels.
                  </StyledP1>
                  <StyledLogoWrapper styles={{ marginRight: "100px" }}>
                    <LogoBlackL />
                  </StyledLogoWrapper>
                </div>

                <div class="right">
                  <StyledBigImageWrapper>
                    <Image
                      width="975"
                      height="731"
                      src="/images/team1.jpeg"
                      alt="team"
                    />
                  </StyledBigImageWrapper>
                </div>
              </Styled2Columns>
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
              <h1>Team</h1>
              <StyledDividerLine />
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