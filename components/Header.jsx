import styled, { keyframes } from 'styled-components'
import Image from 'next/image'
import Link from 'next/link'
import { useMediaQuery } from 'react-responsive'
import { device } from '../utils/media-breakpoints'
import { useState } from 'react'
import NotificationBanner from './NotificationBanner'
import { LogoWhiteS } from './Logo'


const slideIn = keyframes`
    0% {
        opacity: 0;
    }

    100% {
        opacity: 1;
    }
`

const StyledHeaderWrapper = styled.div`
    z-index: 1;
    position: sticky;
    top: 0;
    max-width: 100vw;
    height: 60px;
    /* transition: transform 0.3s, height 0.3s;
    transform: translateY(${props => props.banner ? '0px' : '-40px'}); */
`

const StyledHeader = styled.header`

    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;

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
    justify-content: space-between;
    margin: 12px 0;
    width: 90%;
    max-width: 1400px;
`

const StyledRightContent = styled.div`
    display: flex;
    float: right;
    align-items: center;
`

const StyledLeftContent = styled.div`
    display: flex;
    float: left;
    align-items: center;
`

const StyledLogoWrapper = styled.div`
    margin-right: 5px;

    div {
        height: 0px;
        width: 0px;
    }

    @media ${device.tablet} {
        height: 36px;
        margin-right: 15px;
        div {
            height: 36px;
            width: 36px;
        }
    }

    @media ${device.laptop} {
        height: 48px;
        margin-right: 20px;

        div {
            height: 48px;
            width: 48px;
        }
    }
`

const StyledNavLink = styled.a`
    display: flex;
    align-items: center;
    font-size: 1em;
    font-style: normal;
    font-weight: 500;
    color: ${props => props.theme.white};

    cursor: pointer;

    @media ${device.mobileM} {
        font-size: 1em;
        margin: 5px 0px 5px 20px;
    }

    @media ${device.laptop} {
        font-size: 1.3em;
        margin: 5px 0px 5px 30px;
    }
`

const StyledDropdownWrapper = styled.div`
    position: relative;
    margin: 5px 0px 5px 20px;

    @media ${device.laptop} {
        margin: 5px 0px 5px 30px;
    }

    :hover {
        div {
            visibility: visible;
        }
    }

    a {
        margin: 5px 0;
    }
`

const StyledDropdown = styled.div`
    position: absolute;

    display: flex;
    flex-direction: column;
    justify-content: center;

    width: 100%;

    visibility: hidden;

    @media ${device.laptop} {
        height: 120px;
    }

    a {
        margin: 0;
    }
`

const StyledDropdownNavLinks = styled.a`
    display: flex;
    align-items: center;

    color: ${props => props.theme.navy};
    background-color: ${props => props.theme.yellow};
    font-size: 0.8em;
    font-style: normal;
    font-weight: 400;

    height: 40px;
    width: 100%;

    padding: 10px;

    transition: background-color 0.15s;

    cursor: pointer;

    :hover {
        background-color: ${props => props.theme.lightblue};
        color: ${props => props.theme.white};
        opacity: 1;
    }

    @media ${device.mobileM} {
        font-size: 0.8em;
    }

    @media ${device.laptop} {
        font-size: 1em;
    }
`

const StyledCaretWrapper = styled.div`
    display: inline-flex;
    align-items: center;
`

const NavMenuButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;

    height: 36px;
    width: 36px;

    border: none;
    padding: 0;
    background-color: transparent;
    cursor: pointer;

    div {
            height: ${props => props.isOpen ? "20px" : "36px"};
            width: ${props => props.isOpen ? "20px" : "36px"};
        }

    @media ${device.mobileM} {
        height: 48px;
        width: 48px;

        div {
            height: ${props => props.isOpen ? "26px" : "48px"};
            width: ${props => props.isOpen ? "26px" : "48px"};
        }
    }

    :focus {
        outline: none;
    }
`

const StyledNavMenu = styled.div`
    display: flex;
    flex-direction: column;

    position: -webkit-sticky;
    z-index: 1;

    width: 100%;
    height: 100vh;
    background-color: ${props => props.theme.navy};

    animation: ${slideIn} .25s;
`

const StyledLinksWrapper = styled.div`
    padding-left: 40px;

    a {
        font-size: 1.3em;
        padding: 10px;
    }
`

const StyledSublinksWrapper = styled.div`
    padding-left: 90px;

    a {
        font-size: 1.1em;
        background-color: ${props => props.theme.navy};
        color: ${props => props.theme.white};

        padding: 10px;
    }
`

function Header() {

    const [bannerPresent, setBannerPresent] = useState(true)
    const [navMenuActive, setNavMenuActive] = useState(false)

    function closeBanner() {
        setBannerPresent(false)
    }

    function toggleNavMenu() {
        setNavMenuActive(!navMenuActive)
    }

    const isTabletOrDesktop = useMediaQuery({
        query: `${device.tablet}`
    })

    return (
        <StyledHeaderWrapper banner={bannerPresent}>
            <StyledHeader>
                {/* <NotificationBanner 
                    onBannerClose={closeBanner}
                    bannerPresent={bannerPresent}
                /> */}
                <StyledContentWrapper>
                    <StyledLeftContent>
                        <Link href="/"><a>
                            <StyledLogoWrapper>
                                <LogoWhiteS/>
                            </StyledLogoWrapper>
                            <h1>Re-Imagine Education</h1>
                        </a></Link>
                    </StyledLeftContent>
                    <StyledRightContent>
                        {isTabletOrDesktop === true
                        ?
                            <>
                                <Link href="/"><StyledNavLink>Home</StyledNavLink></Link>
                                <Link href="/programs"><StyledNavLink>Programs & Services</StyledNavLink></Link>
                                <StyledDropdownWrapper>
                                    <Link href="/about"><StyledNavLink>
                                        About Us
                                        <StyledCaretWrapper><Image
                                            src="/icons/down_caret-24px.svg"
                                            alt="Menu"
                                            width={24}
                                            height={24}
                                        /></StyledCaretWrapper>
                                    </StyledNavLink></Link>
                                    <StyledDropdown>
                                        <Link href="/about/#overview">
                                            <StyledDropdownNavLinks>Overview</StyledDropdownNavLinks>
                                            </Link>
                                        <Link href="/about/#our_mission">
                                            <StyledDropdownNavLinks>Our Mission</StyledDropdownNavLinks>
                                        </Link>
                                        <Link href="/about/#our_team">
                                            <StyledDropdownNavLinks>Our Team</StyledDropdownNavLinks>
                                        </Link>
                                    </StyledDropdown>
                                </StyledDropdownWrapper>
                            </>
                        :
                            <NavMenuButton onClick={toggleNavMenu} isOpen={navMenuActive}>
                                <Image
                                    src={navMenuActive ? "/icons/close-white.svg" : "/icons/menu-24px.svg"}
                                    alt="Menu"
                                    fill="white"
                                    width={48}
                                    height={48}
                                />
                            </NavMenuButton>
                        }
                    </StyledRightContent>
                </StyledContentWrapper>
            </StyledHeader>
            {navMenuActive ? 
                <StyledNavMenu>
                    <StyledLinksWrapper>
                        <Link href="/"><StyledNavLink onClick={toggleNavMenu}>Home</StyledNavLink></Link>
                        <Link href="/programs"><StyledNavLink onClick={toggleNavMenu}>Programs & Services</StyledNavLink></Link>
                        <Link href="/about"><StyledNavLink onClick={toggleNavMenu}>About Us</StyledNavLink></Link>
                    </StyledLinksWrapper>
                    <StyledSublinksWrapper>
                        <Link href="/about/#overview">
                            <StyledDropdownNavLinks onClick={toggleNavMenu}>Overview</StyledDropdownNavLinks>
                        </Link>
                        <Link href="/about/#our_mission">
                            <StyledDropdownNavLinks onClick={toggleNavMenu}>Our Mission</StyledDropdownNavLinks>
                        </Link>
                        <Link href="/about/#our_team">
                            <StyledDropdownNavLinks onClick={toggleNavMenu}>Our Team</StyledDropdownNavLinks>
                        </Link>
                    </StyledSublinksWrapper>
                </StyledNavMenu>
                :
                null
            }
        </StyledHeaderWrapper>
    )
}

export default Header