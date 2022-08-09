import styled, { css } from 'styled-components'
import Image from 'next/image'
import { device } from '../utils/media-breakpoints'
import { Styled2Columns, StyledImageWrapper, StyledImageLearn, StyledImageIsiah1, StyledIsiahKeith, StyledImageFun2 } from '../pages/about'

const StyledBODWrapper = styled.article`
    display: flex;
    flex-direction: column;
    // margin: 10px 10px;

    h2 {
      margin: 0;
      margin-bottom: 0px;
      text-decoration: underline;
      font-weight: bold;
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
    <Styled2Columns style={{marginTop:"50px"}}>
      <div class="column">
        < StyledImageWrapper style={{ alignContent: "center" , marginRight: "10px"}} >
          <Image
            src="/images/fun2.png"
            width="402"
            height="355"
            alt="fun2"
          />
        </StyledImageWrapper>
      </div>
      <div class="column" style={{ alignContent: "center", marginTop: "40px"}}  >
        <StyledBODWrapper>
          <div style={{ width: "100%", height: "50px" }}></div>
          <h2>Board Of Directors</h2>
          <div style={{ width: "100%", height: "20px" }}></div>
         
          <li><StyledNameWrapper><h3>{bodMembers[0]}</h3></StyledNameWrapper></li>
          <li><StyledNameWrapper><h3>{bodMembers[1]}</h3></StyledNameWrapper></li>
          <li><StyledNameWrapper><h3>{bodMembers[2]}</h3></StyledNameWrapper></li>
          <li><StyledNameWrapper><h3>{bodMembers[3]}</h3></StyledNameWrapper></li>
          <li><StyledNameWrapper><h3>{bodMembers[4]}</h3></StyledNameWrapper></li>

        </StyledBODWrapper>
      </div>

    </Styled2Columns>
  )
}



export default BoardOfDirectors