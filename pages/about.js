import styled from 'styled-components'
import Image from 'next/image'
import _Head from '../components/Head'
import { StyledContainer, StyledMain, StyledSection, StyledSectionContentWrapper, StyledSectionAnchor, StyledP1, StyledP2, StyledP3, StyledDividerLine} from '../components/Styled'
import Footer from '../components/Footer'
import Header from '../components/Header'
import TeamProfile from '../components/TeamProfile'
import { device } from '../utils/media-breakpoints'


const overviewCopy = [
  "Re-Imagine Education Inc. (RED), was launched in July 2020 as one of the newest movements in education. Re-Imagine Education is an education management and consulting firm centered on building diversity/inclusion within industries and facilitates professional learning training, coaching, and innovative solutions for academia in an initiative to support and retain educators of color in the field.",
  "Our purpose is to eliminate educational inequity, provide advocacy for diversity, equity, and inclusion through policy reform, and support the recruitment and retention of educators of color to create a culture of inclusivity through mentorship, accountability, and partnership.  The Re-Imagine team seeks to promote culturally responsive teaching and leadership practices to transform schools and shift the culture of education.",
  "RED develops culturally responsive tools, strategies and resources that will equip school leaders and teachers in their role. Lastly, RED actively collaborates with schools  and community organizations to host educator focused programs and events.",
  "RED was created to aid in supporting and retaining teachers of color, and also build awareness in applying proven culturally relevant and equitable pedagogical practices in urban and urban-like schools to promote increased educational success for all youth. We seek to transform education through social and community engagement and prepare educators of color with the educational interventions and resources that develop the cultural competencies for under-prepared students to achieve success.",
  "In this moment and time of great unrest and uncertainty within our communities and schools, it is imperative to properly influence the next generation and provide  training around diversity, culture, and inclusion for educators and leaders alike.  Re-Imagine Education was founded by Isiah King, an education consultant with 16 years of experience in schools throughout Wisconsin, and Keith Streicher, an education consultant and department director at the University of Wisconsin-Milwaukee. Both men possess more than a decade of education experience at the K-12 and university level. "
]

const missionStatement = "The mission of Re-Imagine Education is to Attract, Retain, and Elevate educators of color and to create a culture of inclusivity through mentorship, accountability, and partnership."

const coreValues = [
  {title: "Results", description: "Results are the effects or outcome of something. We assume personal responsibility for the ambitious results that support our mission and serve educators. We use results as self-reflective tools for our improvement, and we ground our performance and decision-making in data. Data helps us to both frame our challenges and eliminate barriers that get in the way of operating simply, quickly and effectively. Excellence is always the goal, and good is the enemy of great."},
  {title: "Diversity", description: "Diversity is the recognition that all of the ways in which people differ create crucial diversity of thought, ideas, perspectives, and values. These identity categories are both visible and invisible, including but not limited to race, ethnicity, gender, age, national origin, religion, disability, sexual orientation, gender identity, socioeconomic status, education, marital status, and language. We also recognize that individuals are affiliated with multiple identities, both seen and unseen, and experience those identities differently."},
  {title: "Equity", description: "Equity is the act of developing fair systems, procedures, and resource distribution mechanisms to create equitable opportunity for all people, with a focus on eliminating barriers that have prevented the full participation of historically and currently oppressed groups. Equity is not a one-size-fits-all model, and is not about being difference-blind, but rather about actively engaging with difference and eliminating barriers to opportunity."},
  {title: "Inclusion", description: "Inclusion is the act of creating environments in which any individual or group can be and feel welcomed, respected, supported, and valued to fully participate. An inclusive and welcoming climate embraces differences and offers respect in words and actions for all people, allowing everyone to bring their full, authentic selves to their work."}
]

const goals = [
  "Recruiting new ethnic minorities into education.",
  "Accelerating the careers of ethinic minorities already working in education.",
  "Mobilizing and supporting underserved parents to advocate for changes that benefit their children.",
  "Building the capacity of education organizations to become more diverse, equitable and inclusive."
]

const teamMembers = [
  {
    name: "Isiah King",
    title: "Co-Founder & Executive Director",
    imageURL: "/images/isiah-portrait.jpeg",
    imageDimensions: { width: 646, height: 800},
    copy: [
      "Isiah King is one of the Founders of Re-Imagine Education, Inc. He is a native of Milwaukee, Wisconsin with over 16 years of experience working in education. As a former founding principal of an elementary school in Beloit, WI, he currently serves as the Network Culture Leader for LUMIN Schools in his hometown of Milwaukee. He is a member of the accreditation engagement review team with Cognia which offers accreditation to help schools drive continuous improvement.  In his career as an educator, Isiah has served as a teacher, dean of students, and principal at schools in the city of Milwaukee & Beloit.",
      "He has worked in public, charter, and private school sectors.  In addition to his current role, he is an education consultant with Education PowerED in Dallas, TX. He has years of experience in educational leadership, policy development, community engagement for social justice and equity."
    ]
  },
  {
    name: "Keith Streicher",
    imageURL: "/images/keith-portrait.jpeg",
    imageDimensions: { width: 461, height: 571},
    title: "Co-Founder & Chief Executive Officer",
    copy: [
      "Keith Streicher is one of the Co-Founders of Re-Imagine Education, Inc. He is a veteran of the U.S. Army and served his country in the mountains of the Republic of South Korea and in the valleys of Iraq Anbar province. Following his service, Mr. Streicher completed his bachelor’s degree at the Catholic University of America and an Executive Entrepreneurship Certificate Program from the Stanford Graduate School of Business. He has served Congresswoman Eleanor Holmes-Norton as an intern, Congressman Beto O'Rourke as a Military Legislative Assistant, and the Obama administration as a White House intern and United States Department of Veterans Affairs Secretarial Appointee advising the Secretary, the second largest federal agency, and the United States Congress on veteran’s issues as a veteran’s expert. ",
      "Recently, Keith Streicher has served as the Interim Business Operations Manager for Rocketship Transformation Prep, Program Director for the Wisconsin Veterans Chamber of Commerce, and former Campaign Manager for Councilwoman Chantia Lewis-Chantia for Progress. Keith sits on the Rite Hite YMCA advisory board as Chair of the Annual Giving Campaign and Social Responsibility committee, Board of Trustees for Milwaukee’s Finest Scholars, and Board of Directors of Outpost Natural Foods, Milwaukee County War Museum VEI Committee, and the City of Milwaukee’s African American Male Initiative. He currently serves as Director of the Veterans Upward Bound Trio & Pre-College Department at the University of Wisconsin-Milwaukee."
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

function About(props) {
    return (
      <StyledContainer>
        <_Head/>
        <Header/>
        <StyledMain>

            <StyledSectionAnchor id={"overview"}/>
            <StyledSection index={0}>
              <StyledSectionContentWrapper>
                <h1>Overview</h1>
                <StyledDividerLine/>
                {overviewCopy.map( (p, i) => <StyledP2 key={i}>{p}</StyledP2> )}
              </StyledSectionContentWrapper>
            </StyledSection>

            <StyledSectionAnchor id={"our_mission"}/>
            <StyledSection index={1}>
              <StyledSectionContentWrapper>
                <h1>Our Mission</h1>
                <StyledDividerLine/>
                <StyledP1>{missionStatement}</StyledP1>
                <br/>
                <h1>Core Values</h1>
                <StyledDividerLine/>
                <StyledCoreValuesList>
                  {coreValues.map( (value, i) => 
                    <StyledCoreValue key={i}>
                      <h2>{value.title}</h2>
                      <StyledP3>{value.description}</StyledP3>
                    </StyledCoreValue>
                  )}
                </StyledCoreValuesList>
                <br/>
                <h1>Goals</h1>
                <StyledDividerLine/>
                <StyledGoalList>
                  {goals.map( (goal, i) =>
                    <StyledGoal key={i}>
                      <StyledGoalNumberWrapper><Image
                        src={'/icons/number' + (i + 1) + '.svg'}
                        alt={(i + 1)}
                        width={48}
                        height={48}
                      /></StyledGoalNumberWrapper>
                      <StyledP1>{goal}</StyledP1>
                    </StyledGoal>
                  )}
                </StyledGoalList>
              </StyledSectionContentWrapper>
            </StyledSection>

            <StyledSectionAnchor id={"our_team"}/>
            <StyledSection index={2}>
              <StyledSectionContentWrapper>
                <h1>Our Team</h1>
                <StyledDividerLine/>
                {teamMembers.map( (member, i) =>
                <div key={i}>
                  <TeamProfile
                    name={member.name}
                    title={member.title}
                    imageURL={member.imageURL}
                    imageDimensions={member.imageDimensions}
                    copy={member.copy}
                    justification={i % 2 == 0 ? 0 : 1}
                  ></TeamProfile>
                  {i != teamMembers.length - 1 ? <StyledDividerLine/> : null}
                </div>
                )}
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