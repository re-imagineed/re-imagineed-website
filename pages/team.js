import _Head from '../components/Head'
import {StyledContainer, StyledH1, StyledDividerLine } from '../components/Styled'
import TeamProfile from '../components/TeamProfile'
import BoardOfDirectors from '../components/BOD'

const teamMembers = [
  {
    name: "Isiah King",
    title: "Co-Founder & Co-Chief Executive Officer",
    imageURL: "/images/isiah_5x4_cropped.png",
    imageDimensions: { width: 340, height: 272},
    copy: [
      "Isiah King has served in public, charter, and private schools for over 16 years. Isiah has consulted and facilitated training and workshops in schools, districts, and networks to improve in a variety of areas including instructional coaching, culturally responsive practices, educational equity, restorative practice, and leadership development.",
      "Isiah brings best practices he’s learned regarding how to serve historically underserved students at an exceptionally high level. Isiah is charged with creating vibrant school cultures that support bold student achievement outcomes. He leads through a strong commitment to diversity and inclusiveness, assisting schools to build critical mindsets and tangible skill sets so school leaders and teachers can implement that vision with a high level of success."
    ]
  },
  {
    name: "Keith Streicher",
    imageURL: "/images/keith-portrait2.jpeg",
    imageDimensions: { width: 340, height: 272},
    title: "Co-Founder & Co-Chief Executive Officer",
    copy: [
      "Keith Streicher is one of the Co-Founders of Re-Imagine Education, Inc. He is a veteran of the U.S. Army and served his country in the mountains of the Republic of South Korea and in the valleys of Iraq Anbar province. Following his service, Mr. Streicher completed his bachelor’s degree at the Catholic University of America and an Executive Entrepreneurship Certificate Program from the Stanford Graduate School of Business. He has served Congresswoman Eleanor Holmes-Norton as an intern, Congressman Beto O'Rourke as a Military Legislative Assistant, and the Obama administration as a White House intern and United States Department of Veterans Affairs Secretarial Appointee advising the Secretary, the second largest federal agency, and the United States Congress on veteran’s issues as a veteran’s expert.",
      "Recently, Keith Streicher has served as the Interim Business Operations Manager for Rocketship Transformation Prep, Program Director for the Wisconsin Veterans Chamber of Commerce, and former Campaign Manager for Councilwoman Chantia Lewis-Chantia for Progress. Keith sits on the Rite Hite YMCA advisory board as Chair of the Annual Giving Campaign and Social Responsibility committee, Board of Trustees for Milwaukee’s Finest Scholars, and Board of Directors of Outpost Natural Foods, Milwaukee County War Museum VEI Committee, and the City of Milwaukee’s African American Male Initiative."
    ]
  }
]

function TeamMembers(props) {
  return (teamMembers.map((member, i) =>
    <div key={i}>
      <TeamProfile
        name={member.name}
        title={member.title}
        imageURL={member.imageURL}
        imageDimensions={member.imageDimensions}
        copy={member.copy}
        justification={i % 2 == 0}
      ></TeamProfile>
    </div>
  )
)
}

export function Team(props) {
  return (
    <StyledContainer>
      <StyledH1>Team</StyledH1>
      <StyledDividerLine />
      <TeamMembers/>
      <BoardOfDirectors/>
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

export default Team
