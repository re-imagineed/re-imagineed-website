import styled from 'styled-components'
import Image from 'next/image'


const StyledBanner = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 40px;
    background-color: ${props => props.theme.lightblue};

    h3 {
        font-size: .9em;
        color: ${props => props.theme.navy};
        margin: 0px 15px;
    }
`

const ImageWrapper = styled.div`
    position: absolute;
    right: 1em;;

  img {
        width: 0.8em;
        height: 0.8em;
        cursor: pointer;
}
`

function ComingSoonBanner(props) {

    function handleClick(e) {
        e.preventDefault()
        props.onBannerClose();
    }

    return (
        <StyledBanner>
                <h3>We’re just getting started. Full site coming soon!</h3>
                <ImageWrapper>
                    <Image
                        src="/icons/close.svg"
                        alt="Close banner."
                        width={64}
                        height={64}
                        onClick={handleClick}
                    />
                </ImageWrapper>
        </StyledBanner>
    )
}

export default ComingSoonBanner