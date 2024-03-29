import styled, { keyframes } from 'styled-components'
import { device } from '../utils/media-breakpoints'

export const StyledContainer = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    height: 100%;
    min-height: 50vh;
    width: 100%;
`

export const StyledMain = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;

    @media ${device.tablet} {
    }

    @media ${device.laptop} {
    }
`

export const StyledSection = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    width: 100%;

    background-color: ${props => props.index % 2 == 0 ? props.theme.grapefruit : props.theme.citrus};
`

export const StyledSectionContentWrapper = styled.div`
    width: 75%;
    min-width: 300px;
    // margin: 40px 0px 40px 0px;
    margin: calc(2rem + 1vw);
    @media ${device.tablet} {
        margin: 60px 0px 100px 0px;
    }
`

export const StyledSectionAnchor = styled.div`
    transform: translateY(-60px);
`

export const StyledH1 = styled.h1`
    font-size: calc(1rem + 1.0vw);
    line-height: calc(1rem + 1vw);
`

export const StyledH2 = styled.h2`
    font-size: calc(1rem + 0.8vw);
    line-height: calc(1rem + 0.9vw);
`
export const StyledH3 = styled.h2`
    font-size: calc(1rem + 0.5vw);
    line-height: calc(1rem + 0.9vw);
`

export const StyledP1 = styled.p`
    // font-size: 1.2em;
    // line-height: 1.2em;
    font-size: calc(1rem + 0.3vw);
    line-height: calc(1rem + 1vw);

    // @media ${device.tablet} {
    //     font-size: 1.2em;
    // }
`

export const StyledP2 = styled.p`
    // font-size: 1.2em;
    // line-height: 1.5em;

    font-size: calc(1rem + 0.2vw);
    line-height: calc(1rem + 0.7vw);

    // @media ${device.tablet} {
    //     font-size: 1em;
    // }
`

export const StyledP3 = styled.p`
    // font-size: 0.8em;

    font-size: calc(1rem + 0.1vw);
    line-height: calc(1rem + 0.5vw);


    // @media ${device.tablet} {
    //     font-size: 0.9em;
    // }
`

export const StyledInlineLink = styled.a`
  display: inline-block;
  font-weight: 500;
  text-decoration: underline;
`

const lineExpand = keyframes`
    0% {
        transform: scaleX(0);
    }

    100% {
        transform: scaleX(1);
    }
`

export const StyledDividerLine = styled.div`
  height: 2px;
  width: 100%;
  min-width: 200px;
  background-color: ${props => props.theme.grey};

  transform-origin: left;
  animation: ${lineExpand} 1.5s ease-in-out;
`