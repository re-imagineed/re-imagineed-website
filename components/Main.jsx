import styled from 'styled-components'
import { device } from '../utils/media-breakpoints'
import CopyBlock from './CopyBlock'
import { LogoBlackL } from './Logo'
import Subscription from './Subscription';


const copy = [
    {
        headline: 'How do we Re-Imagine the culture of education?',
        paragraphs: [
            'Our purpose is to eliminate educational inequity, provide advocacy for equality through policy reform, and support retention of educators of color through our professional learning institute.'
        ]
    }
]

const StyledMain = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    margin-top: 60px;
    padding-bottom: 420px;

    @media ${device.tablet} {
        margin-top: 90px;
    }

    @media ${device.laptop} {
        flex-direction: row;
        justify-content: center;
        padding-bottom: 340px;
    }
`

const StyledLogoWrapper = styled.div`
    display: flex;
    justify-content: center;
    width: 40%;
    min-width: 250px;
    max-width: 350px;
`

const StyledContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 60%;
    min-width: 300px;
    max-width: 550px;
    height: 100%;
    margin-top: 40px;

    @media ${device.laptop} {
        margin-left: 100px;
        margin-top: 0;
    }
`

function Main(props) {
    return (
        <StyledMain>
            <StyledLogoWrapper>
                <LogoBlackL/>
            </StyledLogoWrapper>
            <StyledContentWrapper>
                {/* Dynamically generates blocks of copy from copy object. */}
                { copy.map((block, i) => <CopyBlock 
                                            key={block.headline + i}
                                            headline={block.headline}
                                            paragraphs={block.paragraphs}
                                         />
                )}
                <Subscription mailchimpURL={props.mailchimpURL}/>
            </StyledContentWrapper>
        </StyledMain>
    )
}

export default Main