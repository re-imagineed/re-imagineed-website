import styled, { keyframes } from 'styled-components'
import { device } from '../utils/media-breakpoints'

export const StyledContainer = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    height: 100%;
    min-height: 100vh;
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

    width: 100%;

    background-color: ${props => props.index % 2 == 0 ? props.theme.lightgrey : props.theme.white};
`

export const StyledSectionContentWrapper = styled.div`
    width: 60%;
    min-width: 300px;
    margin: 40px 0px 60px 0px;

    @media ${device.tablet} {
        margin: 60px 0px 100px 0px;
    }
`

export const StyledSectionAnchor = styled.div`
    transform: translateY(-60px);
`

export const StyledP1 = styled.p`
    font-size: 1em;
    line-height: 1.5em;

    @media ${device.tablet} {
        font-size: 1.2em;
    }
`

export const StyledP2 = styled.p`
    font-size: 0.9em;
    line-height: 1.5em;

    @media ${device.tablet} {
        font-size: 1em;
    }
`

export const StyledP3 = styled.p`
    font-size: 0.8em;

    @media ${device.tablet} {
        font-size: 0.9em;
    }
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
  width: 60%;
  min-width: 200px;
  background-color: ${props => props.theme.grey};

  transform-origin: left;
  animation: ${lineExpand} 1.5s ease-in-out;
`