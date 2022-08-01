import styled, { css } from 'styled-components'
import { device } from '../utils/media-breakpoints'
import Image from 'next/image'
import { StyledP2 } from './Styled'
import BoardMember from './BOD'

const StyledProfileWrapper = styled.article`
    display: flex;
    flex-direction: column;

    margin: 50px 0;
`

const StyledProfileHead = styled.div`
    display: flex;
    flex-direction: column;

    margin-bottom: 10px;

    @media ${device.tablet} {
        flex-direction: column;
    }

    @media ${device.laptop} {
        flex-direction: row;
    }
`

const StyledImageWrapper = styled.div`
    display: flex;
    border: 10px solid ${props => props.theme.off_white37};
    max-width: 300px;
    min-width: 100px;
    height: auto;
`

const StyledNameWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;

    margin: 30px 0px 0px 0px;

    h2 {
        margin: 0;
        margin-bottom: 10px;
    }

    h3 {
        margin: 0;
        font-size: 1em;
        font-weight: 500;
        color: ${props => props.theme.navy};

        @media ${device.laptop} {
            font-size: 1.1em;
        }
    }


    @media ${device.laptop} {
        margin: 0 30px;
    }
`

const StyledProfileBody = styled.div`
`

function TeamProfile(props) {
    return (
        <StyledProfileWrapper>
            <StyledProfileHead>
                <StyledImageWrapper>
                    <Image
                        src={props.imageURL}
                        alt={props.name}
                        width={props.imageDimensions.width}
                        height={props.imageDimensions.height}
                    />
                </StyledImageWrapper>
                <StyledNameWrapper>
                    <h2>{props.name}</h2>
                    <h3>{props.title}</h3>
                </StyledNameWrapper>
            </StyledProfileHead>
            <StyledProfileBody>
                {props.copy.map( (p, i) => 
                    <StyledP2 key={i}>{p}</StyledP2>
                )}
            </StyledProfileBody>
        </StyledProfileWrapper>
    )
}

export default TeamProfile