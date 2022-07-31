import styled, { css } from 'styled-components'
import { device } from '../utils/media-breakpoints'
import Image from 'next/image'
import { StyledP2 } from './Styled'

const StyledBODWrapper = styled.article`
    display: flex;
    flex-direction: column;
    margin: 10px 10;

    h2 {
      margin: 0;
      margin-bottom: 0px;
      text-decoration: underline;
    }
`
const StyledNameWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: left;
    align-content: left
    text-align: left

    margin: 0px 0px 0px 0px;

    h3 {
      margin: 0;
      margin-bottom: 0px;
    }

    @media ${device.laptop} {
        margin: 0 10px;
    }
`

const bodMembers = [
    "Maurice Thomas",
    "Erin McNett",
    "Dr. Kristina Sterling",
    "Lakesha Jones",
    "Victor Warnsley"
  ]

function BoardOfDirectors(props) {
  return (

    <StyledBODWrapper>
     <div style={{width: "100%", height: "40px"}}></div>
      <h2 id="h2u">Board Of Directors</h2>
     
      <div style={{width: "100%", height: "20px"}}></div>
        <li><StyledNameWrapper><h3>{bodMembers[0]}</h3></StyledNameWrapper></li>
        <li><StyledNameWrapper><h3>{bodMembers[1]}</h3></StyledNameWrapper></li>
        <li><StyledNameWrapper><h3>{bodMembers[2]}</h3></StyledNameWrapper></li>
        <li><StyledNameWrapper><h3>{bodMembers[3]}</h3></StyledNameWrapper></li>
        <li><StyledNameWrapper><h3>{bodMembers[4]}</h3></StyledNameWrapper></li>
  
    </StyledBODWrapper>
  )
}



export default BoardOfDirectors