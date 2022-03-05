import styled from 'styled-components'
import { OfferingsTable, MembershipTable } from '../components/Tables'
import { device } from '../utils/media-breakpoints'
import _Head from '../components/Head'
import { StyledContainer, StyledMain, StyledSection, StyledSectionContentWrapper, StyledSectionAnchor, StyledP1, StyledP2, StyledP3, StyledDividerLine, StyledInlineLink} from '../components/Styled'
import Footer from '../components/Footer'
import Header from '../components/Header'

const programs = [
  // {title: "Cultural Understanding and Responsive Education (C.U.R.E) Mentoring Program", description: "C.U.R.E., the curriculum is broken into 5 modules focusing on 5 different concepts centered around cultural responsiveness/sensitivity. C.U.R.E. coaches will provide bi-weekly sessions (beginning of the month and end of the month) to schools that hire for the services.  During each professional learning institute, C.U.R.E coaches will give teacher reflection activities for staff to complete independently and collectively with students. C.U.R.E. coaches will pop in once a month to assigned schools to track data on school/teacher responsiveness. Coach will provide action steps and feedback to school staff/leaders monthly. Schools can be coached by C.U.R.E to understand modules to be the facilitator at their own personal site(additional charge for this service). Once individuals have completed all five modules, he/she becomes C.U.R.E Certified."},
  // {title: "Educator Development Series", description: "The educator development series consist of 10 sessions that are aligned to each cohorts’ area of need and can be facilitated in your school, network, and district professional development by our RED education consultants.  These sessions are: Racial Identity Development, Culture Management, Student, Family, and Community Engagement, Diversity, Equity, Inclusion, Mental Health, Work-Life Balance, Restorative Justice Practices, Trauma-Informed, and Introduction to Urban Education."},
  // {title: "Educators’ Network Collaborative", description: "The collaborative is a centralized group that meets monthly for all educators to gather together, share resources, collaborate, and learn from and with one another. Through our powerful community, we are changing the narrative around what it means to be an educator. We aim to foster connections between educators across the nation and inspire others to join the movement."},
  // {title: "School Consultation", description: "Our consulting services are intentionally designed to equip educators with the mindsets, knowledge, and skills to dramatically transform classrooms and schools. Even in the most challenging environments, culturally responsive teaching has been effective at increasing student performance across all content areas and grade levels. We provide professional learning in the form of educator development sessions, one-on-one coaching, and targeted instructional support. Each learning opportunity centers on the components of Culturally Responsive Teaching and Leadership."},
  // {title: "One-on-One Coaching", description: "Our one-on-one coaching experiences are meant to meet educators’ individual desires for their classroom. We have often found that educators have ideas and strategies that they want to try in the classroom but lack the support needed to bring them into fruition. Our Education consultants will work with you to bring an individualized coaching experience that will fulfill a variety of needs."},
  // {title: "Professional Learning Institute", description: "Our P.L.I. experiences are intentionally designed to equip educators with the mindsets, knowledge, and skills needed to dramatically transform classrooms and schools. Even in the most challenging environments, culturally responsive teaching has been effective at increasing student performance across all content areas and grade levels. We provide this institute of learning for educators, school administration, businesses, firms, and so much more."},
  // {title: "Policy Reform and Advocacy Program", description: "The goal of school choice is to give all families — especially families in underserved communities — access to high-quality schools that work for them. Re-Imagine advocates work to overcome these barriers by connecting families to parent advocates who help them find and apply to high-quality schools of choice. These advocates don’t wait for trouble to arise; they reach out to families, leveraging a network of community-connected partners, such as schools, day care centers and homeless shelters, to help families who may lack information get started. We are empowering families to use their voice to speak out as it relates to issues in education at the political level. We support families by providing information, training and leadership opportunities so that families can be informed and effective partners in their child's education and in the systems that support them."},
  // {title: "Howard-Streicher & King Scholarship Program", description: "The Howard-Streicher & King Grant provides scholarships for education majors who commit to teach in high-need fields in low-income areas for at least three academic years.",
  //  other: [
  //    {title: "Key Criteria", content: "Students must meet eligibility criteria for federal student aid, complete the FAFSA, be enrolled at an eligible education program at a participating school, meet specific academic requirements, join RED’s Cohort 1 for Aspiring Teachers where you will receive mentorship and sign an agreement to serve."},
  //    {title: "Award Information", content: "Up to $1,000 per year."}
  //  ]}
]

const StyledProgramContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const StyledProgramModule = styled.article`
  width: 90%;
  margin: 30px;
  border-radius: 20px;
  overflow: hidden;

  @media ${device.laptop} {
    width: 80%;
  }
`

const StyledProgramHeader = styled.div`
  padding: 20px 30px;

  background-color: ${props => props.theme.yellow};

  h2 {
    margin: 0;
    font-size: 1.2em;
    line-height: 1.4em;
  }

  @media ${device.laptop} {
    h2 {
      font-size: 1.5em;
    }
  }
`

const StyledProgramBody = styled.div`
  padding: 10px 30px;

  background-color: ${props => props.theme.lightgrey};
`

const StyledOL = styled.ol`
  line-height: 2.2em;
  margin-bottom: 20px;
`

const StyledUL = styled.ul`
  line-height: 2.2em;
  margin-bottom: 20px;
`

function Programs(props) {
    return (
      <StyledContainer>
        <_Head/>
        <Header/>
        <StyledMain>
          <StyledSection index={0}>
            <StyledSectionContentWrapper>
              
              <h1>Programs & Services</h1>
              <StyledDividerLine/>
              <StyledP1>Re-Imagine Education develops culturally responsive tools, strategies and resources that will equip school leaders and teachers in their role. Lastly, RED actively collaborates with schools  and community organizations to host educator focused programs and events.</StyledP1>
              
              {/* <StyledProgramContainer>
                {programs.map((program, i) =>
                  <StyledProgramModule key={i}>
                    <StyledProgramHeader>
                      <h2>{program.title}</h2>
                    </StyledProgramHeader>
                    <StyledProgramBody>
                      <StyledP2>{program.description}</StyledP2>
                      {program.other ? program.other.map((item, i) =>
                        <StyledP2 key={i}>{item.title + ': ' + item.content}</StyledP2>
                      )
                      : null}
                    </StyledProgramBody>
                  </StyledProgramModule>
                )}
              </StyledProgramContainer> */}

            </StyledSectionContentWrapper>
          </StyledSection>

          <StyledSection index={1}>
            <StyledSectionContentWrapper>
              <h1>Attract</h1>
              <StyledDividerLine/>
              <StyledP2>Recruits students in high school, college and career changers who are interested in pursuing a career in K-12 education.</StyledP2>
              <ul>
                <li>Talent Recruitment</li>
                <li>Teacher Like Me Exploration Program</li>
                <li>Introduction to Urban ED Workshops</li>
                <li>Cohort Mentorship</li>
                <li>Network Collaborative</li>
                <li>Howard-Streicher & King Scholarship Program</li>
                <li>Access to Teacher Developmental Resources</li>
              </ul>
              <div style={{width: "100%", height: "60px"}}></div>

              <h1>Retain</h1>
              <StyledDividerLine/>
              <StyledP2>Provides professional learning support through training, workshops, coaching, and mentorship to improve educator practice.</StyledP2>
              <ul>
                <li>Culture & Instructional Coaching</li>
                <li>Cultural Understanding and Responsive Education (C.U.R.E) Mentoring Program</li>
                <li>Educator Development Workshops, Retreats, & Conferences</li>
                <li>Access to Teacher Toolbox Resources</li>
              </ul>
              <div style={{width: "100%", height: "60px"}}></div>

              <h1>Elevate</h1>
              <StyledDividerLine/>
              <StyledP2>Building the capacity of schools and education organizations to become more diverse, equitable and inclusive in their school-wide culture.</StyledP2>
              <ul>
                <li>Network Collaborative</li>
                <li>School Culture & Climate Audit</li>
                <li>School Improvement & Strategic Planning</li>
                <li>School Leadership Development</li>
                <li>Trauma-Informed & Anti-Racism Training</li>
              </ul>
              <div style={{width: "100%", height: "60px"}}></div>
            </StyledSectionContentWrapper>
          </StyledSection>

          <StyledSection index={2}>
            <StyledSectionContentWrapper>
              
              <h2>Connect with Re-Imagine Education to discuss your organization's needs!</h2>
              <StyledDividerLine/>

              <StyledOL>
                <li>Schedule a 30 minute <StyledInlineLink target="_blank" href="https://calendly.com/isiah-king-1/30min">Consultation Meeting</StyledInlineLink> with our team</li>
                <li>Complete our <StyledInlineLink target="_blank" href="https://docs.google.com/forms/d/e/1FAIpQLSfdFUadJx1nCJfO1siouNrgk23g-prQ3QNL02py7z5aFZwK2Q/viewform">Services Request Form</StyledInlineLink></li>
              </StyledOL>              
              <StyledP2>Help us to increase and diversify the teacher pipeline in education. Support the cause with a donation to Re-Imagine Education from your phone or computer:</StyledP2>
              <StyledUL>
                <li>Text “REIMAGINEED” to 53-555 or visit <StyledInlineLink target="_blank" href="https://givebutter.com/re-imagine-ed">givebutter.com/re-imagine-ed</StyledInlineLink></li>
                <li>Tax Exempt/EIN #: 85-2324820</li>
              </StyledUL>
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

export default Programs