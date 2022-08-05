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
import ContactUs from '../components/ContactForm'

const StyledFeatureSection = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: left;
  align-items: center;

  width: 100%;

  background-image: none;
  background-color: ${props => props.theme.lightgrey};

  @media ${device.tablet} {
    min-height: 700px;
    width: 100%;

    background-image: url("/images/team1.jpeg");
    background-size: fill;
    background-position: right center;
    background-repeat: no-repeat;
    background-blend-mode: normal;
  }
`

const StyledFeatureContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  align-content: center;
  width: 30%;
  min-height: 400px;
  
  00px;
  margin: 0px;
  padding: 40px;

  background-color: ${props => props.theme.grapefruit};

  h1 {
    font-size: 2em;
    line-height: 1em;
    margin-top: 0px;
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
      margin-bottom: 40px;
    }
  }
`

const StyledButtonLink = styled.a`
    display: flex;
    justify-content: center;
    align-items: center;
    width: fit-content;
    padding: 15px;
    border-radius: 5px;
    border: none;
    background: ${props => props.theme.navy};
    cursor: pointer;
    outline: none;

    &:hover {
        opacity: 1;
        background: ${props => props.theme.lightblue};
    }

    font-size: 1.2em;
    font-weight: 500;
    color: white;
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
  min-width: 200px;
  max-width: 250px;
  margin: 30px 0px 30px 0px;

  @media ${device.tablet} {
    margin: 40px 0px 40px 0px;
  }

  @media ${device.laptop} {
    min-width: 300px;
    max-width: 400px;

    margin: 40px 100px 40px 150px;
  }
`

const StyledImageWrapper = styled.div`
  display: flex;
  border: 10px solid ${props => props.theme.off_white37};
  max-width: 250px;
  min-width: 200px;
  height: auto;
  margin: 20px 0;

  @media ${device.laptop} {
    max-width: 300px;
    min-width: 200px;
    margin: ${props => props.justified == "right" ? "0px 0px 0px 40px" : "0px 40px 0px 0px"};
  }
`

const StyledBigImageWrapper = styled.div`
  display: flex;
  border: 10px solid ${props => props.theme.off_white37};
  max-width: 1200px;
  min-width: 200px;
  height: auto;
  margin: 20px 0;

  @media ${device.laptop} {
    max-width: 1024px;
    min-width: 200px;
    margin: ${props => props.justified == "right" ? "0px 0px 0px 40px" : "0px 40px 0px 0px"};
  }
`

const StyledAnimationWrapper = styled.div`
display: flex;
@keyframes example {
  // from {background-color: red;}
  // to {background-color: yellow;}
  0%   {background-color: red;}
  25%  {background-color: yellow;}
  50%  {background-color: blue;}
  100% {background-color: green;}
}
`

const StyledAnimationImages = styled.div`

width: 500px;
min-height: 300px;
animation-name: example;
animation-duration: 4s
background-color: white;
background: url("/images/fun1.png") no-repeat  right top;
}
.fun1 {
  background-image: url("/images/fun1.png");
}

.fun2 {
  background-image: url("/images/fun2.png");
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

          <StyledFeatureSection>
            <StyledFeatureContainer>
            <div>
                <h1>Re-Imagine Education, Inc.</h1>
                <StyledP1>
                Re-Imagine Education, Inc. is a non-profit 501(c)(3) with a mission to attract BIPOC talent to education careers and leverage intentional pathways for retention, career grooming, and upward mobility through meaningful mentorship channels.
                </StyledP1>

                <StyledLogoWrapper>
                  <LogoBlackL />
                </StyledLogoWrapper>
              </div>
            </StyledFeatureContainer>
          </StyledFeatureSection>

          {/* <StyledSection index={0}>
            <StyledSectionContentWrapper>
              <StyledContentContainer>
                <StyledLogoWrapper>
                  <LogoBlackL />
                </StyledLogoWrapper>
                <div>
                  <h1>Our Mission</h1>
                  <StyledDividerLine />
                  <StyledP1>
                    To attract, retain, and elevate aspiring and current educators of color. Creating a culture of inclusivity through mentorship, accountability, and partnership.
                  </StyledP1>
                </div>

              </StyledContentContainer>
            </StyledSectionContentWrapper>
          </StyledSection> */}

          {/* <StyledSection index={1}>
            <StyledSectionContentWrapper>
              <h1>Offerings & Support</h1>
              <StyledDividerLine/>
              <StyledP1>
                Re-Imagine Education seeks to build connections through supports that include: networking and building a cohort, providing mentoring support, and professional learning.
              </StyledP1>
              <StyledP1>
                RED members join the organization online and are placed in one of five cohorts, led by a Cohort Mentor; members set goals for their own growth and development each year, and Cohort Leaders are responsible for providing the support necessary to reach those goals.
              </StyledP1>
              <OfferingsTable/>
              <div style={{display: "flex", justifyContent: "center", padding: "30px"}}>
                <Link href="/programs"><StyledButtonLink>Explore Our Progams & Services</StyledButtonLink></Link>
              </div>
            </StyledSectionContentWrapper>
          </StyledSection> */}
      

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