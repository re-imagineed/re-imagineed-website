import styled, { keyframes } from 'styled-components'
import Image from 'next/image'
import Link from 'next/link'
import { useMediaQuery } from 'react-responsive'
import { device } from '../utils/media-breakpoints'
import { useState } from 'react'
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
    max-width: 100%;
    height: 60px;
`

const StyledHeader = styled.header`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: ${(props) => props.theme.sky};

  h1 {
    // font-size: 1.2em;
    font-size: calc(1rem + 0.7vw);
    color: ${(props) => props.theme.white};
    // margin: 5px 25px;
    margin: calc(0.2rem + 0.1vw);


    // @media ${device.mobileM} {
    //   font-size: 1.5em;
    // }

    // @media ${device.laptop} {
    //   font-size: 2em;
    // }
  }
  
  .navigation-bar ul {
    padding: 0px;
    margin: 5px 20px;
    text-align: left;
    display: flex;
    vertical-align:top;

    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
    position: -webkit-sticky; /* Safari */
    position: sticky;
    white-space: nowrap;
  }

  li {
    float: left;
  }

  li a {
    display: block;
    padding: 2px;
    // border: 1px solid #bbb;
  }
  li a:hover {
    background-color: ${(props) => props.theme.red};
  }
  
  .active {
    background-color: ${(props) => props.theme.yellow};
`

const StyledContentWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    // margin: 12px 0;
    margin: calc(0.3rem + 0.1vw);
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
    // margin-right: 5px;
    margin: calc(0.3rem + 0.3vw);
    div {
        height: 0px;
        width: 0px;
    }

    // @media ${device.tablet} {
    //     height: 36px;
    //     margin-right: 15px;
    //     div {
    //         height: 36px;
    //         width: 36px;
    //     }
    // }

    // @media ${device.laptop} {
    //     height: 48px;
    //     margin-right: 20px;

    //     div {
    //         height: 48px;
    //         width: 48px;
    //     }
    // }
`

const StyledNavLink = styled.a`
    display: flex;
    align-items: center;
    // font-size: 1em;
    font-size: calc(1rem + 0.2vw);
    font-style: normal;
    font-weight: 500;
    color: ${props => props.theme.white};

    cursor: pointer;
    margin: calc(1rem + 1vw)
    // @media ${device.mobileM} {
    //     font-size: 1em;
    //     margin: 5px 0px 5px 20px;
    // }

    // @media ${device.laptop} {
    //     font-size: 1.3em;
    //     margin: 5px 0px 5px 30px;
    // }
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
    flex-direction: row;

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

const StyledRedButtonLink = styled.a`
    display: flex;
    justify-content: center;
    align-items: center;
    width: fit-content;
    padding: 15px;
    border-radius: 5px;
    border: none;
    background: ${props => props.theme.red};
    cursor: pointer;
    outline: none;

    &:hover {
        opacity: 1;
        background: ${props => props.theme.lightblue};
    }

    // font-size: 1.2em;
    font-size: calc(1rem + 0.2vw);
    font-weight: 500;
    color: white;
`

const StyledButtonLink = styled.a`
    display: flex;
    justify-content: center;
    align-items: center;
    width: fit-content;
    padding: 15px;
    border-radius: 5px;
    border: none;
    background: ${props => props.theme.sky};
    cursor: pointer;
    outline: none;

    &:hover {
        opacity: 1;
        background: ${props => props.theme.lightblue};
    }

    font-size: 1.2em;
    font-weight: 500;
    color: white;
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
                <StyledContentWrapper>
                    <StyledLeftContent>
                        <nav class="navigation-bar">
                            <h1>Re-Imagine Education</h1>
                            <ul>
                                {isTabletOrDesktop === true
                                    ?
                                    <StyledContentWrapper>
                                        <li><Link href="/#"><StyledNavLink>Home</StyledNavLink></Link></li>
                                        <li><Link href="#about_us"><StyledNavLink>About Us</StyledNavLink></Link></li>
                                        <li><Link href="#our_team"><StyledNavLink>Team</StyledNavLink></Link></li>
                                    </StyledContentWrapper>
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
                            </ul>
                        </nav>
                    </StyledLeftContent>
                    <StyledRightContent>
                        <StyledLogoWrapper>
                            <LogoWhiteS />
                        </StyledLogoWrapper>
                        <div style={{ width: "15px", height: "100%" }}></div>
                        <Link href="https://tinyurl.com/redonations"><a><StyledRedButtonLink>Donate</StyledRedButtonLink></a></Link>
                        <div style={{ width: "15px", height: "100%" }}></div>
                        <Link href="https://us7.list-manage.com/contact-form?u=5080e466c5f746c8b294721bc&form_id=e8ae05aca1f8eaf2371061d59e2e7222"><a><StyledButtonLink>Contact Us</StyledButtonLink></a></Link>
                        <li><Link href="#subscribe"><StyledNavLink>Subscribe</StyledNavLink></Link></li>
         
                    </StyledRightContent>
                
                </StyledContentWrapper>
            </StyledHeader>
            {navMenuActive ?
                <StyledNavMenu>
                    <StyledLinksWrapper>
                        <Link href="/#"><StyledNavLink onClick={toggleNavMenu}>Home</StyledNavLink></Link>
                        <Link href="#about_us"><StyledNavLink onClick={toggleNavMenu}>About us</StyledNavLink></Link>
                        <Link href="#our_team"><StyledNavLink onClick={toggleNavMenu}>Team</StyledNavLink></Link>
                    </StyledLinksWrapper>
                </StyledNavMenu>
                :
                null
            }
        </StyledHeaderWrapper>
    )
}

export default Header