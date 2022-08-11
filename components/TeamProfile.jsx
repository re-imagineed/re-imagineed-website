import styled, { css } from 'styled-components'
import { device } from '../utils/media-breakpoints'
import Image from 'next/image'
import { StyledP2, StyledP1 } from './Styled'
import { StyledImageWrapper } from '../pages/about'

const StyledProfileWrapper = styled.article`
    display: flex;
    flex-direction: column;

    // margin: 50px 0;
    margin: calc(0.3rem + 2vw);
`

const StyledProfileHead = styled.div`
    display: flex;
    flex-direction: column;

    // margin-bottom: 10px;
    margin: calc(0.3rem + 0.3vw);

    @media ${device.tablet} {
        flex-direction: column;
    }

    @media ${device.laptop} {
        flex-direction: row;
    }
`

export const StyledNameWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    color: ${props => props.theme.navy};
    // margin: 30px 0px 0px 0px;
    margin: calc(0.3rem + 0.3vw);

    h2 {
        margin: 0;
        margin-bottom: 10px;
        font-size: 1.5em;
        font-weight: bold;
        line-height: 1.2em;
    }

    h3 {
        margin: 0;
        font-size: 1.3em;
        line-height: 1.2em;
        font-weight: normal;
        color: ${props => props.theme.navy};

        @media ${device.laptop} {
            font-size: 1.3em;
        }
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
    @media ${device.laptop} {
        margin: 0 30px;
    }
`

const StyledProfileBody = styled.div`
    // font-size: 1.2em;
    font-weight: normal;
    // line-height:  1.0em;
    font-size: calc(1rem + 0.3vw);
    line-height: calc(1rem + 1vw);
`


function TeamProfile(props) {
    return (

        props.justification % 2 != 0 ?
            <StyledProfileWrapper>
                <StyledProfileHead>
                    <div>
                        <StyledImageWrapper>

                            <Image
                                src={props.imageURL}
                                alt={props.name}
                                width={props.imageDimensions.width}
                                height={props.imageDimensions.height}
                            />

                        </StyledImageWrapper>
                    </div>
                    <StyledNameWrapper>
                        <div class="h2-fluid">{props.name}</div>
                        <div class="h3-fluid">{props.title}</div>
                    </StyledNameWrapper>
                </StyledProfileHead>
                <StyledProfileBody>
                    {props.copy.map((p) =>
                        <StyledP2>{p}</StyledP2>
                    )}
                </StyledProfileBody>
            </StyledProfileWrapper>
            :
            <StyledProfileWrapper>
                <StyledProfileHead style={{ justifyContent: "right" }}>
                    <StyledNameWrapper>
                        <div class="h2-fluid">{props.name}</div>
                        <div class="h3-fluid">{props.title}</div>
                    </StyledNameWrapper>
                    <div>
                        <StyledImageWrapper>
                            <Image
                                src={props.imageURL}
                                alt={props.name}
                                width={props.imageDimensions.width}
                                height={props.imageDimensions.height}
                            />
                        </StyledImageWrapper>
                    </div>
                </StyledProfileHead>
                <StyledProfileBody>
                    {props.copy.map((p) =>
                        <StyledP2>{p}</StyledP2>
                    )}
                </StyledProfileBody>
            </StyledProfileWrapper>
    )
}

export default TeamProfile