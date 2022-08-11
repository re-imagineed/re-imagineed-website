import styled, { css } from 'styled-components'
import Image from 'next/image'
import { device } from '../utils/media-breakpoints'
import { Styled2Columns, StyledImageWrapper, StyledImageLearn, StyledImageIsiah1, StyledIsiahKeith, StyledImageFun2 } from '../pages/about'

const StyledBODWrapper = styled.article`
    display: flex;
    flex-direction: column;
    // margin: 10px 10px;
    margin: calc(1rem + 1vw);
    margin-left: 0;
    h2 {
      margin: 0;
      margin-bottom: 0px;
      text-decoration: underline;
      font-weight: bold;
    }

    .h2-fluid {
      font-size: calc(1rem + 0.5vw);
      line-height: calc(1.4rem + 1.2vw);
      text-decoration: underline;
      font-weight: bold;
    }
    
    .h3-fluid {
      font-size: calc(1rem + 0.4vw);
      line-height: calc(1.4rem + 1vw);
    }
    li {
      margin-left: 20px;
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
      font-weight: bold;
      font-size: 1.3em;
      line-height: 1.3em;
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
    <Styled2Columns style={{marginTop:"5vw", marginLeft: "5vw"}}>
      <div class="left" style={{width:"45%"}}>
        < StyledImageWrapper>
          <Image
            src="/images/fun2.png"
            width="502"
            height="444"
            alt="fun2"
          />
        </StyledImageWrapper>
      </div>
      <div class="right" style={{width:"53%", marginTop: "1vw", marginLeft:"5vw"}}  >
        <StyledBODWrapper>
          <div style={{ width: "100%", height: "2vw" }}></div>
          <div class="h2-fluid">Board Of Directors</div>
          <div style={{ width: "100%", height: "1vw" }}></div>
         
          <li><StyledNameWrapper><div class="h3-fluid">{bodMembers[0]}</div></StyledNameWrapper></li>
          <li><StyledNameWrapper><div class="h3-fluid">{bodMembers[1]}</div></StyledNameWrapper></li>
          <li><StyledNameWrapper><div class="h3-fluid">{bodMembers[2]}</div></StyledNameWrapper></li>
          <li><StyledNameWrapper><div class="h3-fluid">{bodMembers[3]}</div></StyledNameWrapper></li>
          <li><StyledNameWrapper><div class="h3-fluid">{bodMembers[4]}</div></StyledNameWrapper></li>

        </StyledBODWrapper>
      </div>

    </Styled2Columns>
  )
}



export default BoardOfDirectors