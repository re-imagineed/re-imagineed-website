import styled from 'styled-components'
import Image from 'next/image'
import _Head from '../components/Head'
import {StyledContainer, StyledMain, StyledSection, StyledSectionContentWrapper, StyledSectionAnchor, StyledP1, StyledP2, StyledP3, StyledDividerLine, StyledInlineLink} from '../components/Styled'
import Footer from '../components/Footer'
import Header from '../components/Header'
import TeamProfile from '../components/TeamProfile'
import { device } from '../utils/media-breakpoints'
import BoardOfDirectors from '../components/BOD'


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

const missionStatement = "To attract, retain, and elevate aspiring and current educators of color. Creating a culture of inclusivity through mentorship, accountability, and partnership."

const coreValues = [
  {title: "Results", description: "Results are the effects or outcome of something. We assume personal responsibility for the ambitious results that support our mission and serve educators. We use results as self-reflective tools for our improvement, and we ground our performance and decision-making in data. Data helps us to both frame our challenges and eliminate barriers that get in the way of operating simply, quickly and effectively. Excellence is always the goal, and good is the enemy of great."},
  {title: "Diversity", description: "Diversity is the recognition that all of the ways in which people differ create crucial diversity of thought, ideas, perspectives, and values. These identity categories are both visible and invisible, including but not limited to race, ethnicity, gender, age, national origin, religion, disability, sexual orientation, gender identity, socioeconomic status, education, marital status, and language. We also recognize that individuals are affiliated with multiple identities, both seen and unseen, and experience those identities differently."},
  {title: "Equity-Focused", description: "Equity is the act of developing fair systems, procedures, and resource distribution mechanisms to create equitable opportunity for all people, with a focus on eliminating barriers that have prevented the full participation of historically and currently oppressed groups. Equity is not a one-size-fits-all model, and is not about being difference-blind, but rather about actively engaging with difference and eliminating barriers to opportunity."},
  {title: "Inclusive", description: "Inclusion is the act of creating environments in which any individual or group can be and feel welcomed, respected, supported, and valued to fully participate. An inclusive and welcoming climate embraces differences and offers respect in words and actions for all people, allowing everyone to bring their full, authentic selves to their work."},
  {title: "Never Stop Growing", description: "A growth mindset is when an individual believes their talents can be developed through hard work, good strategies, and input from others. To effectively contribute to the mission of Re-Imagine Education, we foster an environment where we are constantly learning from one another."}
]

const goals = [
  {goal: "ATTRACT", description: "Recruiting new ethnic minorities into education."},
  {goal: "RETAIN", description: "Accelerating the careers of ethinic minorities already working in education."},
  {goal: "ELEVATE", description: "Building the capacity of education organizations to become more diverse, equitable and inclusive."}
]

const teamMembers = [
  {
    name: "Isiah King",
    title: "Co-Founder & Co-Chief Executive Officer",
    imageURL: "/images/isiah_5x4_cropped.png",
    imageDimensions: { width: 1121, height: 897},
    copy: [
      "Isiah King has served in public, charter, and private schools for over 16 years. Isiah has consulted and facilitated training and workshops in schools, districts, and networks to improve in a variety of areas including instructional coaching, culturally responsive practices, educational equity, restorative practice, and leadership development.",
      "Isiah brings best practices he’s learned regarding how to serve historically underserved students at an exceptionally high level. Isiah is charged with creating vibrant school cultures that support bold student achievement outcomes. He leads through a strong commitment to diversity and inclusiveness, assisting schools to build critical mindsets and tangible skill sets so school leaders and teachers can implement that vision with a high level of success."
    ]
  },
  {
    name: "Keith Streicher",
    imageURL: "/images/keith-portrait2.jpeg",
    imageDimensions: { width: 453, height: 362},
    title: "Co-Founder & Co-Chief Executive Officer",
    copy: [
      "Keith Streicher is one of the Co-Founders of Re-Imagine Education, Inc. He is a veteran of the U.S. Army and served his country in the mountains of the Republic of South Korea and in the valleys of Iraq Anbar province. Following his service, Mr. Streicher completed his bachelor’s degree at the Catholic University of America and an Executive Entrepreneurship Certificate Program from the Stanford Graduate School of Business. He has served Congresswoman Eleanor Holmes-Norton as an intern, Congressman Beto O'Rourke as a Military Legislative Assistant, and the Obama administration as a White House intern and United States Department of Veterans Affairs Secretarial Appointee advising the Secretary, the second largest federal agency, and the United States Congress on veteran’s issues as a veteran’s expert.",
      "Recently, Keith Streicher has served as the Interim Business Operations Manager for Rocketship Transformation Prep, Program Director for the Wisconsin Veterans Chamber of Commerce, and former Campaign Manager for Councilwoman Chantia Lewis-Chantia for Progress. Keith sits on the Rite Hite YMCA advisory board as Chair of the Annual Giving Campaign and Social Responsibility committee, Board of Trustees for Milwaukee’s Finest Scholars, and Board of Directors of Outpost Natural Foods, Milwaukee County War Museum VEI Committee, and the City of Milwaukee’s African American Male Initiative."
    ]
  }
]

const StyledCoreValuesList = styled.ul`
  list-style: url('/icons/cheese-bullet-0.5x.svg');
  margin-left: 0px;
  padding-left: 30px;

  @media ${device.laptop} {
    list-style: url('/icons/cheese-bullet-1x.svg');
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
`

const StyledGoal = styled.li`
  display: flex;
  align-items: center;

  list-style: none;
  padding-inline-start: 0px;

  margin-bottom: 50px 0;

  @media ${device.laptop} {
    padding-inline-start:10px;
  }
`
const StyledGoalNumberWrapper = styled.div`
  display: flex;
  align-items: center;

  min-width: 28px;
  max-width: 28px;

  margin: 20px 20px 20px 0px;

  @media ${device.laptop} {
    min-width: 48px;
    margin: 20px 20px 20px 5px;
  }
`

export const  StyledGoalWrapper = styled.p`
    font-size: 1em;
    line-height: 1.5em;   

    @media ${device.tablet} {
        font-size: 1em;
    }

    dl {
      padding: 0.5em;
      font-size: 1.2em;
    }
    
    dt {
      float: left;
      clear: left;
      width: 100px;
      text-align: left;
      font-weight: bold;
    }

    dt.underline {
      text-decoration: underline;
    }

    dt::after {
      content: ":";
      font-weight: normal;
    }

    dd {
      margin: 0 0 0 0px;
      padding: 0 0 0.7em 0;
    }

    dd.normal {
      font-weight: normal;
    }
  
`
export const Styled2Columns = styled.div`
  flex-direction: column;
  align-items: left;
  margin-bottom: 10px;
  align-content: left;
  font-weight: bold;
  font-size: 1em;
  line-height: 1.5em;

  .column {
    float: left;
    width: 50%;
    padding: 50px;
    margin-bottom: 10px;
  }

  /* Clear floats after the columns */
  .row:after {
    content: "";
    display: table;
    clear: both;
  }
`
const Styled2Rows = styled.div`
  flex-direction: row;
  align-items: left;
  margin-bottom: 10px;
  align-content: left;
  font-weight: bold;
  font-size: 1em;
  line-height: 1.5em;

  .row {
    float: left;
    width: 50%;
    padding: 50px;
    margin-bottom: 10px;
  }
`
export const StyledImage = styled.div`
  width: 500px;
  min-height: 300px;
  background-color: white;
  background: url("/images/fun1.png") no-repeat center top;
}
`

export const StyledImage2 = styled.div`
  width: 500px;
  min-height: 300px;
  margin-top: 80px;
  background-color: white;
  background: url("/images/learn.png") no-repeat center top;
}
`

export const StyledImage3 = styled.div`
  width: 500px;
  min-height: 300px;
  background-size: auto;
  background-color: black;
  background: url("/images/team1.jpeg") no-repeat center top;
}
`

export const StyledImage4 = styled.div`
  width: 500px;
  min-height: 400px;
  background-color: white;
  background: url("/images/isiah-keith.png") no-repeat center top;
}
`
export const StyledImage5 = styled.div`
  width: 500px;
  height: 300px;
  background-color: white;
  background-size: auto;
  background: url("/images/fun2.png") no-repeat center top;
}
`

export function Overview(props) {
  return (
    <StyledContainer>
    <Styled2Columns>
      <div class="column">
      
          <h1>About Us</h1>
          <div style={{ width: "100%", height: "10px" }}></div>
          <StyledP1>{overviewCopy[0]}</StyledP1>
          <StyledP1>{overviewCopy[1]}</StyledP1>
          <ul>
            <li>{overviewCopy[2]}</li>
            <li>{overviewCopy[3]}</li>
            <li>{overviewCopy[4]}</li>
          </ul>

          <StyledP1>Launched in July 2020, Re-Imagine Education is focused on increasing and diversifying the
            teacher pipeline. A more diverse teacher and leader workforce is crucial for all students. A <StyledInlineLink target="_blank" href='https://learningpolicyinstitute.org/product/diversifying-teaching-profession-brief'>Learning Policy Institute</StyledInlineLink> study found that having teachers of color in the classroom affects students of color in several ways, including:</StyledP1>
          <ul>
            <li>{overviewCopy[5]}</li>
            <li>{overviewCopy[6]}</li>
            <li>{overviewCopy[7]}</li>
            <li>{overviewCopy[8]}</li>
            <li>{overviewCopy[9]}</li>
          </ul>
          <StyledP1>{overviewCopy[10]}</StyledP1>
      </div>
      <div class="column">
        <div style={{ width: "100%", height: "80px" }}></div>
            <StyledImage2></StyledImage2>
      </div>
      <div style={{ width: "100%", height: "80px" }}></div>
    </Styled2Columns>
    <div style={{ width: "100%", height: "40px" }}></div>
    </StyledContainer>

  )
}

export function Mission(props) {
  return (
    <StyledContainer>

      <h1>Core Values</h1>
      <StyledCoreValuesList>
        {coreValues.map((value, i) =>
          <StyledCoreValue key={i}>
            <h2>{value.title}</h2>
            <StyledP3>{value.description}</StyledP3>
          </StyledCoreValue>
        )}
      </StyledCoreValuesList>
      <div style={{ width: "100%", height: "40px" }}></div>

      <Styled2Columns>
        <div class="column">
          <div style={{ width: "100%", height: "40px" }}></div>

          <h1>Goals</h1>
          <StyledGoalList>
            <Goals />
          </StyledGoalList>
        </div>
        <div class="column">

          <div style={{ width: "100%", height: "80px" }}></div>
          <StyledImage5></StyledImage5>
        </div>
      </Styled2Columns>
    </StyledContainer>
  )
}
function Goal(props) {
  return (
  <StyledGoalWrapper>
      <dl> 
        <dt class="underline">{props.goal}</dt>
        <dd class="normal">{props.description}</dd> 
      </dl>
</StyledGoalWrapper>
  )
}

function Goals(props) {
  return (goals.map((goal) => 
    <Goal
      goal={goal.goal}
      description={goal.description}
    ></Goal>
  ))

}

function TeamMembers(props) {
  return (teamMembers.map((member, i) => 
  <div key={i}>
    <TeamProfile
      name={member.name}
      title={member.title}
      imageURL={member.imageURL}
      imageDimensions={member.imageDimensions}
      copy={member.copy}
      justification={i % 2 == 0 ? 0 : 1}
    ></TeamProfile>
    {i != teamMembers.length - 1 ? <StyledDividerLine /> : null}
  </div>
  )
)

}


export function Team(props) {
  return (

    <StyledContainer>
      <StyledDividerLine />
      <TeamMembers/>
      <BoardOfDirectors/>
    </StyledContainer>

  )
}
function About(props) {
    return (
      <StyledContainer>
        <_Head />
        <Header />

        <StyledMain>
          <StyledSection index={0}>
            <StyledSectionAnchor id={"overview"} />
            <StyledSectionContentWrapper>
              <Overview />
            </StyledSectionContentWrapper>
          </StyledSection>

          <StyledSection index={1}>
            <StyledSectionAnchor id={"our_mission"} />
            <StyledSectionContentWrapper>
              <StyledDividerLine />
              <Mission />
            </StyledSectionContentWrapper>
          </StyledSection>

          <StyledSection index={2}>
            <StyledSectionAnchor id={"our_team"} />
            <StyledSectionContentWrapper>
              <StyledDividerLine />
              <Team />
            </StyledSectionContentWrapper>
          </StyledSection>
        </StyledMain>
        <Footer
          isHomePage={false}
          mailchimpURL={props.mailchimpURL}
        />
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

export default About
