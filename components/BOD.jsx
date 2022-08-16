import styled, { css } from 'styled-components'
import Image from 'next/image'
import { device } from '../utils/media-breakpoints'
import { StyledColumns, StyledImageWrapper} from '../pages/about'

const StyledBODWrapper = styled.article`
    display: flex;
    flex-direction: column;
    // margin: 10px 10px;
    margin: calc(1rem + 1vw);
    margin-left: 0;

    .h2-fluid {
      font-size: calc(1rem + 0.5vw);
      line-height: calc(1.4rem + 1.2vw);
      text-decoration: underline;
      font-weight: bold;
    }
  
`
const StyledNameWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: left;
    align-content: left
    text-align: left

    margin: 0px 0px 0px 0px;

    .h3-fluid {
      font-size: calc(1rem + 0.3vw);
      line-height: calc(1rem + 1vw);
    }

    // @media ${device.laptop} {
    //     margin: 0 1vw;
    // }
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
    <StyledColumns style={{ marginTop: "5vw" }}>
      <div  style={{ display: "block", marginLeft: "5vw"}}>
        < StyledImageWrapper>
          <Image
            src="/images/fun2.png"
            width="502"
            height="444"
            alt="fun2"
          />
        </StyledImageWrapper>
      </div>

      <StyledBODWrapper style={{marginLeft: "5vw"}}>
        <div style={{ width: "100%", height: "2vw" }}></div>
        <div class="h2-fluid">Board Of Directors</div>
        <ul>
          <li><StyledNameWrapper><div class="h3-fluid">{bodMembers[0]}</div></StyledNameWrapper></li>
          <li><StyledNameWrapper><div class="h3-fluid">{bodMembers[1]}</div></StyledNameWrapper></li>
          <li><StyledNameWrapper><div class="h3-fluid">{bodMembers[2]}</div></StyledNameWrapper></li>
          <li><StyledNameWrapper><div class="h3-fluid">{bodMembers[3]}</div></StyledNameWrapper></li>
          <li><StyledNameWrapper><div class="h3-fluid">{bodMembers[4]}</div></StyledNameWrapper></li>
        </ul>
      </StyledBODWrapper>

    </StyledColumns>
  )
}



export default BoardOfDirectors