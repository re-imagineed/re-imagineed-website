import styled from 'styled-components'
import Image from 'next/image'


const StyledBanner = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 60px;
    background-color: ${props => props.theme.white};

    h3 {
        color: ${props => props.theme.navy};
        margin: 0px 15px;
    }

    img {
        width: 1.5em;
        height: 1.5em;
    }
`

function ComingSoonBanner() {
    return (
        <StyledBanner>
                <Image
                    src="/icons/timer.svg"
                    alt="Coming soon..."
                    width={100}
                    height={100}
                />
                <h3>Full site coming soon...</h3>
        </StyledBanner>
    )
}

export default ComingSoonBanner