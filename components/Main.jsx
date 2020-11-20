import styled from 'styled-components'
import CopyBlock from './CopyBlock'
import { LogoBlackL } from './Logo'
import Subscription from './Subscription';


const copy = [
    {
        headline: 'How do we re-imagine the culture of education?',
        paragraphs: [
            'Our purpose is to produce culturally responsive solutions, strategies and resources to energize educators, empower students of color, and eradicate educational inequity.'        ]
    }
]

const StyledMain = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 100%;
    margin-top: 90px;
    padding: 0 150px;
    padding-bottom: 340px;
`

const StyledLogoWrapper = styled.div`
    display: flex;
    justify-content: center;
    width: 40%;
    max-width: 350px;
`

const StyledContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;

    width: 60%;
    max-width: 600px;
    height: 100%;
    margin-left: 100px;
`

function Main() {
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
                <Subscription/>
            </StyledContentWrapper>
        </StyledMain>
    )
}

export default Main