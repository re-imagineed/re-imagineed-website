import styled from 'styled-components'
import Image from 'next/image'
import _Head from '../components/Head'
import {StyledContainer,StyledP1, StyledP2, StyledDividerLine, StyledInlineLink, StyledH1} from '../components/Styled'
import { device } from '../utils/media-breakpoints'


const overviewCopy = [
  "Our mission is to attract, retain,and elevate educators of color. To create a culture of inclusivity through mentorship, accountability, and partnership.",
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
  h1 {
    font-size: "1.5em"
  }
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

    // @media ${device.tablet} {
    //     font-size: 1em;
    // }

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
      margin: 0 0 0 0px;
      padding: 0 0 0.5em 0;
    }

    dl dd.normal {
      font-weight: normal;
      display:  inline;
      flex-wrap: wrap;
    }
}
`

export const Styled2Columns = styled.div`
  flex-direction: row;
  align-items: left;
  // margin-bottom: 10px;
  align-content: left;
  font-weight: normal;
  // margin: calc(1rem + 0.1vw);
  margin-left: 0;

  .h1-fluid {
    font-weight: bold;
    font-size: calc(1rem + 0.7vw);
    line-height: calc(1.4rem + 1.2vw);
    text-decoration: underline;
  }

  .h2-fluid {
    font-size: calc(1rem + 0.5vw);
    line-height: calc(1.4rem + 1.1vw);
    text-decoration: underline;
    font-weight: bold;
  }

  .h3-fluid {
    font-size: calc(1rem + 0.2vw);
    line-height: calc(1.4rem + 0.8vw);
  }

  .p-fluid {
    font-size: calc(1rem + 0.vw);
    line-height: calc(1rem + 0.2vw);
  }

  
  h1 {
    font-size: 1.6em;
    line-height: 1.5em;
    margin-top: 50px;
    text-decoration: underline;
  }

  .left {
    float: left;
    width: 49%;
    // padding: 20px;
    // margin-bottom: 30px;
  }

  .right {
    float: right;
    width: 49%;
    // padding: 20px;
    // margin-bottom: 30px;
  }


  /* Clear floats after the columns */
  .row:after {
    content: "";
    display: flex;
    clear: both;
  }
`

const Styled2Rows = styled.div`
  flex-direction: row;
  align-items: center;
  align-content: center;
  justify-content: center;

  width: 100%;
  height: auto;
  margin: 1rem;
  font-weight: normal;

  h1 {
    font-size: 1.7em;
    line-height: 1.5em;
    margin-top: 20px;
    text-decoration: underline;
  }

  .h1-fluid {
    font-weight: bold;
    font-size: calc(1rem + 0.7vw);
    line-height: calc(1.4rem + 2vw);
    text-decoration: underline;
  }

  .top {
    float: left;
    padding: 1rem;
  }

  .bottom {
    float: left;
    padding: 1rem;
  }
`

export const StyledImageWrapper = styled.div`
  display: inline-block;
  border: 1px solid ${props => props.theme.off_white37};
  max-width: 100%;
  height: auto;
  // max-width: 1200px;
  // min-width: 200px;
  // margin: auto;
  height: auto;
  align-content: center;

`

export function Overview(props) {
  return (
    <Styled2Columns>
      <div class="left">
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
      </div>

      <div class="right">
         <Styled2Rows>
          <div class="top">
            <StyledImageWrapper style={{ marginTop: "2vw"}}>
              <Image
                src="/images/learn.png"
                width="1031"
                height="695"
                alt="Learn"
              />
            </StyledImageWrapper>
          </div>

          <div class="bottom" style={{marginLeft: "3vw", marginTop: "3vw"}}>
            <StyledImageWrapper>
              <Image
                src="/images/fun1.png"
                width="500"
                height="237"
                alt="Fun"
              />
            </StyledImageWrapper>
          </div>
          
        </Styled2Rows>
      </div>
    </Styled2Columns>
  )
}

export function CoreValues(props) {
  return (
    <Styled2Columns style={{marginTop:"5vw"}}>
      <div class="left">
        <StyledImageWrapper >
          <Image
            src="/images/isiah2.jpeg"
            width="400"
            height="500"
            alt="Teacher"
          />
        </StyledImageWrapper>
      </div>

      <div class="right" style={{marginTop: "8vw"}} >
        <div class="h1-fluid">Core Values</div>
        <StyledCoreValuesList >
          {coreValues.map((value, i) =>
            <StyledCoreValue key={i}>
              <StyledP2>{value.title}</StyledP2>
            </StyledCoreValue>
          )}
        </StyledCoreValuesList>
      </div>
    </Styled2Columns>
)}

export function GoalList(props) {
  return (
    <Styled2Rows style={{marginTop: "5vw"}}>
      <div class="top">
        <div class="h1-fluid">Goals</div>
        <StyledGoalList>
          <Goals />
        </StyledGoalList>
      </div>

      <div class="bottom">
        <StyledImageWrapper style={{width:"90%"}}>
          <Image
            width="1752"
            height="587"
            src="/images/main.png"
            alt="goal"
          />
        </StyledImageWrapper>
      </div>
    </Styled2Rows>
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
        <CoreValues />
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
