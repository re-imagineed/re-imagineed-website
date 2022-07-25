import styled from 'styled-components'
import { OfferingsTable, MembershipTable } from '../components/Tables'
import { device } from '../utils/media-breakpoints'
import _Head from '../components/Head'
import { StyledContainer, StyledMain, StyledSection, StyledSectionContentWrapper, StyledSectionAnchor, StyledP1, StyledP2, StyledP3, StyledDividerLine, StyledInlineLink} from '../components/Styled'



const StyledOL = styled.ol`
  line-height: 2.2em;
  margin-bottom: 20px;
`

const StyledUL = styled.ul`
  line-height: 2.2em;
  margin-bottom: 20px;
`

function Donate(props) {
  return (
      <StyledContainer>
      <h1>Connect with R.E. | Donate to Support the Mission!</h1>
      <StyledDividerLine />
      <StyledP2>Connect with Re-Imagine Education to discuss your organization's needs!</StyledP2>
      <StyledOL>
        <li>Schedule a 30 minute <StyledInlineLink target="_blank" href="https://calendly.com/isiah-king-1/30min">Consultation Meeting</StyledInlineLink> with our team</li>
        <li>Complete our <StyledInlineLink target="_blank" href="https://docs.google.com/forms/d/e/1FAIpQLSfdFUadJx1nCJfO1siouNrgk23g-prQ3QNL02py7z5aFZwK2Q/viewform">Services Request Form</StyledInlineLink></li>
      </StyledOL>
      <StyledP2>Help us to increase and diversify the teacher pipeline in education. Support the cause with a donation to Re-Imagine Education from your phone or computer:</StyledP2>
      <StyledUL>
        <li>Text “REIMAGINEED” to 53-555 or visit <StyledInlineLink target="_blank" href="https://givebutter.com/re-imagine-ed">givebutter.com/re-imagine-ed</StyledInlineLink></li>
        <li>Tax Exempt/EIN #: 85-2324820</li>
      </StyledUL>
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

export default Donate