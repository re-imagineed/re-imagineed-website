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
    align-items: center;
`

const StyledIconWrapper = styled.div`
    width: 28px;
    margin: auto;
    margin-right: 20px;
    margin-top: 20px;


    @media ${device.laptop} {
        margin: auto;
        margin-left: 20px;
    }
`

function Socials() {
    return (
        <StyledSocials>
            {socialImages.map(image => 
                <StyledIconWrapper key={image.alt}>
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
        </StyledSocials>
    )
}

export default Socials