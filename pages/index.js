import styled from 'styled-components'
import Image from 'next/image'
import Link from 'next/link'
import { LogoBlackL } from '../components/Logo'
import _Head from '../components/Head'
import { device } from '../utils/media-breakpoints'
import { useMediaQuery } from 'react-responsive'
import { StyledContainer, StyledMain, StyledSection, StyledSectionContentWrapper, StyledSectionAnchor, StyledP1, StyledP2, StyledP3, StyledDividerLine} from '../components/Styled'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Contact from '../components/Contact'
import { OfferingsTable } from '../components/Tables'
import SubscribeBanner from '../components/SubscribeBanner'
import { Overview, Mission, Team } from './about'
import Donate from './donate'

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

    background-image: url("/images/isiah1.jpeg");
    background-size: fill;
    background-position: right center;
    background-repeat: no-repeat;
  }
`

const StyledFeatureContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  width: 100%;
  min-height: 400px;
  margin: 0px;
  padding: 40px;

  background-color: ${props => props.theme.yellow};

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

    margin: 40px 100px 40px 0px;
  }
`

const StyledImageWrapper = styled.div`
  display: flex;
  border: 10px solid ${props => props.theme.yellow};
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
  border: 10px solid ${props => props.theme.yellow};
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
                  Our purpose is to eliminate educational inequity, provide advocacy for diversity, equity, and inclusion through policy reform, and support retention of educators of color through mentoring, collaboration, and professional learning opportunities.
                </StyledP1>

                <Link href="#about_us"><StyledButtonLink>Learn More</StyledButtonLink></Link>
              </div>
            </StyledFeatureContainer>
          </StyledFeatureSection>

          <StyledSection index={0}>
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
          </StyledSection>

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
          <h1> ============ About Us =========== </h1>
          <div style={{ width: "100%", height: "20px" }}></div>
          <StyledSection index={1}>
            <StyledSectionContentWrapper>
              <Overview />
            </StyledSectionContentWrapper>
          </StyledSection>
          <StyledSectionAnchor id={"our_mission"} />
          <StyledSection index={2}>
            <StyledSectionContentWrapper>
              <Mission />
            </StyledSectionContentWrapper>
          </StyledSection>


          <StyledSectionAnchor id={"our_team"} />
          <h1> ========== TEAM ========== </h1>
          <div style={{ width: "100%", height: "20px" }}></div>
          <StyledSection index={3}>
            <StyledSectionContentWrapper>
              <h1>Who We Are</h1>
              <StyledDividerLine />
              <div style={{ width: "100%", height: "60px" }}></div>
              <StyledContentContainer>
              <StyledBigImageWrapper>
                  <Image
                    src={"/images/team1.jpeg"}
                    alt={"Team"}
                    width={1200}
                    height={900}
                  />
                </StyledBigImageWrapper>
                </StyledContentContainer>
                <div style={{ width: "100%", height: "60px" }}></div>
              <StyledContentContainer>
                <StyledP1>
                  In this moment and time of great unrest and uncertainty within our communities and schools, it is imperative to properly influence the next generation and provide  training around diversity, culture, and inclusion for educators and leaders alike.
                </StyledP1>
                <StyledImageWrapper justified={"right"}>
                  <Image
                    src={"/images/isiah2.jpeg"}
                    alt={"Isiah"}
                    width={720}
                    height={960}
                  />
                </StyledImageWrapper>
              </StyledContentContainer>
              <StyledContentContainer>
                {!isDesktop ?
                  <StyledP1>
                    Re-Imagine Education was founded by Isiah King, an education consultant with 16 years of experience in schools throughout Wisconsin, and Keith Streicher, an education consultant and department director at the University of Wisconsin-Milwaukee. Both men possess more than a decade of education experience at the K-12 and university level.
                  </StyledP1>
                  : null
                }
                <StyledImageWrapper justified={"left"}>
                  <Image
                    src={"/images/keith2.jpeg"}
                    alt={"Keith"}
                    width={720}
                    height={960}
                  />
                </StyledImageWrapper>

      
                {isDesktop ?
                  <StyledP1>
                    Re-Imagine Education was founded by Isiah King, an education consultant with 16 years of experience in schools throughout Wisconsin, and Keith Streicher, an education consultant and department director at the University of Wisconsin-Milwaukee. Both men possess more than a decade of education experience at the K-12 and university level.
                  </StyledP1>
                  : null
                }
              </StyledContentContainer>
            
              <div style={{ width: "100%", height: "60px" }}></div>
            </StyledSectionContentWrapper>
          </StyledSection>


          <StyledSectionAnchor id={"leadership"} />
          <StyledSection index={4}>
            <StyledSectionContentWrapper>
              <Team />
            </StyledSectionContentWrapper>
          </StyledSection>


          <StyledSectionAnchor id={"donate"} />
          <h1> ========== DONATE ========== </h1>
          <div style={{ width: "100%", height: "20px" }}></div>
          <StyledSection index={5}>       
            <StyledSectionContentWrapper>
              <Donate />
            </StyledSectionContentWrapper>
          </StyledSection>



          <StyledSectionAnchor id={"contact"} />
          <h1> ========== CONTACT ========= </h1>
          <div style={{ width: "100%", height: "20px" }}></div>
          <StyledSection index={6}>
            <StyledSectionContentWrapper>
              <Contact />
            </StyledSectionContentWrapper>
          </StyledSection>

          <StyledSectionAnchor id={"subscribe"} />
          <h1> ========== SUBSCRIBE========= </h1>
          <StyledSection index={8}>
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