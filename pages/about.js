import styled from 'styled-components'
import Image from 'next/image'
import _Head from '../components/Head'
import {StyledContainer,StyledP1, StyledP2, StyledDividerLine, StyledInlineLink, StyledH1, StyledH2} from '../components/Styled'
import { device } from '../utils/media-breakpoints'

const overviewCopy = [
  "Our mission is to attract, retain, and elevate educators of color. To create a culture of inclusivity through mentorship, accountability, and partnership.",
  "Re-Imagine Education was created by Isiah King and Keith Streicher, who have more than a decade of education experience at the K-12 and University level. Our purpose is to:",
  "Offer embed equity and cultural responsiveness in teacher preparation and professional learning",
  "Support for teachers during critical early years",
  "Support for aspiring teachers entering the education field",
  "Boosting overall academic performance",
  "Improving reading and math test scores",
  "Improving graduation rates",
  "Increasing aspirations to attend college",
  "Reducing the number of absences",
  "In this moment and time of great unrest and uncertainty within our communities and schools, it is imperative to properly influence the next generation. Re-Imagine exists to support in closing these disparities in the K-12 education sector."
]

//const missionStatement = "To attract, retain, and elevate aspiring and current educators of color. Creating a culture of inclusivity through mentorship, accountability, and partnership."

const coreValues = [
  {title: "RESULTS-DRIVEN", description: "Results are the effects or outcome of something. We assume personal responsibility for the ambitious results that support our mission and serve educators. We use results as self-reflective tools for our improvement, and we ground our performance and decision-making in data. Data helps us to both frame our challenges and eliminate barriers that get in the way of operating simply, quickly and effectively. Excellence is always the goal, and good is the enemy of great."},
  {title: "DIVERSITY", description: "Diversity is the recognition that all of the ways in which people differ create crucial diversity of thought, ideas, perspectives, and values. These identity categories are both visible and invisible, including but not limited to race, ethnicity, gender, age, national origin, religion, disability, sexual orientation, gender identity, socioeconomic status, education, marital status, and language. We also recognize that individuals are affiliated with multiple identities, both seen and unseen, and experience those identities differently."},
  {title: "EQUITY-FOCUSED", description: "Equity is the act of developing fair systems, procedures, and resource distribution mechanisms to create equitable opportunity for all people, with a focus on eliminating barriers that have prevented the full participation of historically and currently oppressed groups. Equity is not a one-size-fits-all model, and is not about being difference-blind, but rather about actively engaging with difference and eliminating barriers to opportunity."},
  {title: "INCLUSION", description: "Inclusion is the act of creating environments in which any individual or group can be and feel welcomed, respected, supported, and valued to fully participate. An inclusive and welcoming climate embraces differences and offers respect in words and actions for all people, allowing everyone to bring their full, authentic selves to their work."},
  {title: "NEVER STOP GROWING", description: "A growth mindset is when an individual believes their talents can be developed through hard work, good strategies, and input from others. To effectively contribute to the mission of Re-Imagine Education, we foster an environment where we are constantly learning from one another."}
]

const goals = [
  {goal: "ATTRACT", description: "Recruiting new ethnic minorities into education."},
  {goal: "RETAIN", description: "Accelerating the careers of ethnic minorities already working in education."},
  {goal: "ELEVATE", description: "Building the capacity of education organizations to become more diverse, equitable and inclusive."}
]


const StyledCoreValuesList = styled.ul`
  margin-left: 0px;
  padding-left: 20px;
  padding-bottom: 0px;
  font-size: 1.2em;
  @media ${device.laptop} {
    margin-left: 20px;
  }
`

const StyledCoreValue = styled.li`
  padding-inline-start: 0px;

  @media ${device.laptop} {
    padding-inline-start: 20px;
  }
`

const StyledGoalList = styled.ul`
  margin-left: 0px;
  padding-left: 0px;
  text-align: center;
`

const StyledGoal = styled.li`
  display: flex;
  align-items: center;

  list-style: none;
  padding-inline-start: 0px;

  margin-bottom: 20px 0;

`
export const  StyledGoalWrapper = styled.p`
    // font-size: 1.1em;
    // line-height:  1.0em; 
    font-weight: normal;
    flex-direction: row;
    font-size: calc(1rem + 0.2vw);
    line-height: calc(1.4rem + 0.5vw)

    dl {
      padding: 0.5em;
      // font-size: 1.2em;
      flex-wrap: wrap;
    }

    dl dt {
      float: left;
      clear: left;
      width: 100px;
      text-align: left;
      font-weight: bold;
    }

    dl dt.underline {
      text-decoration: underline;
    }

    dl dt::after {
      content: ":";
      font-weight: normal;
      display: inline;
    }

    dl dd {
      margin: 0 0 0 0.5vw;
      padding: 0 0 0.5em 0;
    }

    dl dd.normal {
      font-weight: normal;
      display:  inline;
      flex-wrap: wrap;
    }
}
`

export const StyledColumns = styled.div`
  display: flex;
  flex-direction: column;
  align-content: left;
  font-weight: normal;
  margin-left: 0;
  width: 100%

  @media ${device.tablet} {
    flex-direction: column;
    margin: 0;
  }

  @media ${device.laptop} {
    flex-direction: row;
 }
  
`

export const StyledImageWrapper = styled.div`
  display: inline-block;
  border: 5px solid ${props => props.theme.off_white37};
  // max-width: 100%;
  height: auto;
  max-width: 1200px;
  // min-width: 200px;
  // margin: auto;
  align-content: center;

`

export function Overview(props) {
  return (
    <StyledColumns>
      <div>
        <StyledP2>{overviewCopy[0]}</StyledP2>
        <StyledP2>{overviewCopy[1]}</StyledP2>
        <StyledP2>
          <ul>
            <li>{overviewCopy[2]}</li>
            <li>{overviewCopy[3]}</li>
            <li>{overviewCopy[4]}</li>
          </ul>
        </StyledP2>
        <StyledP2></StyledP2>
        <StyledP2>Launched in July 2020, Re-Imagine Education is focused on increasing and diversifying the
          teacher pipeline. A more diverse teacher and leader workforce is crucial for all students. A <StyledInlineLink target="_blank" href='https://learningpolicyinstitute.org/product/diversifying-teaching-profession-brief'>Learning Policy Institute</StyledInlineLink> study found that having teachers of color in the classroom affects students of color in several ways, including:
        </StyledP2>
        <StyledP2>
          <ul>
            <li>{overviewCopy[5]}</li>
            <li>{overviewCopy[6]}</li>
            <li>{overviewCopy[7]}</li>
            <li>{overviewCopy[8]}</li>
            <li>{overviewCopy[9]}</li>
          </ul>
        </StyledP2>
        <StyledP2>{overviewCopy[10]}</StyledP2>
      </div>


      <div style={{ marginTop: "2vw", marginLeft: "2vw" }}>
        <StyledImageWrapper>
          <Image
            src="/images/learn.png"
            width="1031"
            height="695"
            alt="learn"
          />
        </StyledImageWrapper>

        <StyledImageWrapper style={{ marginTop: "2vw", marginLeft: "2vw" }}>
          <Image
            src="/images/fun1.png"
            width="500"
            height="237"
            alt="fun1"
          />
        </StyledImageWrapper>
      </div>

    </StyledColumns>
  )
}

export function CoreValues(props) {
  return (
    <StyledColumns>
      <div>
        <StyledImageWrapper >
          <Image
            src="/images/core_values.png"
            width="400"
            height="500"
            alt="core_values"
          />
        </StyledImageWrapper>
      </div>
      <div style={{ marginTop: "5vw", marginLeft: "10vw" }}>
        <StyledH2 style={{ textDecoration: "underline" }}>Core Values</StyledH2>

        <StyledCoreValuesList >
          {coreValues.map((value, i) =>
            <StyledCoreValue key={i}>
              <StyledP2>{value.title}</StyledP2>
            </StyledCoreValue>
          )}
        </StyledCoreValuesList>
      </div>
    </StyledColumns>
)}

export function GoalList(props) {
  return (
  
    <div>
        <StyledH2 style={{textDecoration: "underline"}}>Goals</StyledH2>
        <StyledGoalList>
          <Goals />
        </StyledGoalList>

      <div style={{ width: "100%", height: "2vw" }}></div>
        <StyledImageWrapper>
          <Image
            width="400"
            height="500"
            src="/images/goals.png"
            alt="goals"
          />
        </StyledImageWrapper>
    </div>
   
  )
}

function Goal(props) {
  return (
    <StyledGoal>
      <StyledGoalWrapper>
        <dl>
          <dt class="underline">{props.goal}</dt>
          <dd class="normal">{props.description}</dd>
        </dl>
      </StyledGoalWrapper>
    </StyledGoal>
  )
}

function Goals(props) {
  return (goals.map((g) =>
    <Goal
      goal={g.goal}
      description={g.description}
    ></Goal>
  ))

}

export function AboutUs(props) {
    return (
      <StyledContainer>
        <StyledH1>About Us</StyledH1>
        <StyledDividerLine />
        <Overview />
        <div style={{ width: "100%", height: "3vw" }}></div>
        <CoreValues />
        <div style={{ width: "100%", height: "3vw" }}></div>
        <GoalList />
    
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

export default AboutUs
