import styled from 'styled-components'
import { device } from '../utils/media-breakpoints'
import { useState } from 'react'
import ComingSoonBanner from './ComingSoonBanner'
import { LogoWhiteS } from './Logo'

const StyledHeaderWrapper = styled.div`
    height: ${props => props.banner ? '113px' : '60px'};
    transition: transform 0.3s, height 0.3s;
    transform: translateY(${props => props.banner ? '0px' : '-40px'});
`

const StyledHeader = styled.header`
    position: absolute;
    top: 0;
    width: 100%;

    background-color: ${props => props.theme.navy};

    h1 {
        font-size: 1.2em;
        color: ${props => props.theme.white};
        margin: 5px 0;

        @media ${device.mobileM} {
            font-size: 1.5em;
        }

        @media ${device.laptop} {
            font-size: 2em;
        }
    }
`

const StyledContentWrapper = styled.div`
    display: flex;
    justify-content: center;
    margin: 12px 0;
`

const StyledContent = styled.div`
    display: flex;
    align-items: center;
    width: 90%;
    max-width: 1400px;
`

const StyledLogoWrapper = styled.div`
    height: 36px;
    margin-right: 20px;

    div {
        height: 36px;
        width: 36px;
    }

    @media ${device.laptop} {
        height: 48px;
        div {
            height: 48px;
            width: 48px;
        }
    }
`

function Header() {

    const [bannerPresent, setBannerPresent] = useState(true)

    function closeBanner() {
        setBannerPresent(false)
    }

    return (
        <StyledHeaderWrapper banner={bannerPresent}>
            <StyledHeader>
                <ComingSoonBanner 
                    onBannerClose={closeBanner}
                    bannerPresent={bannerPresent}
                />
                <StyledContentWrapper>
                    <StyledContent>
                        <StyledLogoWrapper>
                            <LogoWhiteS/>
                        </StyledLogoWrapper>
                        <h1>Re-Imagine Education</h1>
                    </StyledContent>
                </StyledContentWrapper>
            </StyledHeader>
        </StyledHeaderWrapper>
    )
}

export default Header