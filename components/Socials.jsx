import styled from 'styled-components'
import { device } from '../utils/media-breakpoints'
import Image from 'next/image'


const socialImages = [
    { alt: 'LinkedIn', src: '/icons/linkedin.png', url: 'https://www.linkedin.com/company/re-imagine-education-inc', width: 128, height: 128 },
    { alt: 'Twitter', src: '/icons/twitter.svg', url: 'https://twitter.com/reimagineeduca3', width: 128, height: 128 },
    { alt: 'Facebook', src: '/icons/facebook.png', url: 'https://www.facebook.com/Re-Imagine-Education-Inc-100972571807919', width: 128, height: 128 },
    { alt: 'Instagram', src: '/icons/instagram.png', url: 'https://www.instagram.com/reimagineed/', width: 128, height: 128 }
]

const StyledSocials = styled.div`
    display: flex;
    flex-direction: column;

    color: white;

    h2 {
        margin-top: 0px;
    }
`

const StyledIconsContainer = styled.div`
    display: flex;
    justify-content: left;
    align-items: center;
    margin-top: 5px;
`

const StyledIconWrapper = styled.div`
    width: 28px;
    margin: auto;
    margin-right: 20px;

    @media ${device.laptop} {
        margin: auto;
        margin-left: ${props => props.index > 0 ? "20px" : "0px"};
    }
`

function Socials() {
    return (
        <StyledSocials>
            <h2>Follow Us</h2>
            <StyledIconsContainer>
                {socialImages.map((image, i) => 
                    <StyledIconWrapper key={i} index={i}>
                        <a href={image.url} title={image.alt}>
                            <Image
                                src={image.src}
                                alt={image.alt}
                                width={image.width}
                                height={image.height}
                            />
                        </a>
                    </StyledIconWrapper>
                )}
            </StyledIconsContainer>
        </StyledSocials>
    )
}

export default Socials