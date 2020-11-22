import styled from 'styled-components'
import { useMediaQuery } from 'react-responsive'
import { device } from '../utils/media-breakpoints'
import Image from 'next/image'


const StyledBanner = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 40px;
    min-height: 40px;
    background-color: ${props => props.theme.lightblue};

    h3 {
        font-size: 1em;
        font-weight: 500;
        color: ${props => props.theme.navy};
        margin: 0px 20px;

        @media ${device.tablet} {
            font-size: 1em;
        }
    }

    @media ${device.tablet} {
        height: 40px;
    }
`

const ImageWrapper = styled.div`
    position: absolute;
    right: 1.2em;

  img {
        width: 0.8em;
        height: 0.8em;
        cursor: pointer;
}
`

function ComingSoonBanner(props) {

    const isTabletOrDesktop = useMediaQuery({
        query: `${device.tablet}`
    })

    function handleClick(e) {
        e.preventDefault()
        props.onBannerClose();
    }

    return (
        <StyledBanner>
                {isTabletOrDesktop === true
                    ? <h3>We’re just getting started. Full site coming soon!</h3>
                    : <h3>Our full site's coming soon!</h3>
                }
                <ImageWrapper onClick={handleClick}>
                    <Image
                        src="/icons/close2.svg"
                        alt="Close banner."
                        width={64}
                        height={64}
                    />
                </ImageWrapper>
        </StyledBanner>
    )
}

export default ComingSoonBanner