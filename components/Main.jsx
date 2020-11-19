import styled from 'styled-components'
import CopyBlock from './CopyBlock'
import Logo from './Logo'
import Subscription from './Subscription';


const copy = [
    {
        headline: 'Re-Imagine Education, Inc',
        paragraphs: [
            'Re-Imagine Education was created to train and support teachers and leaders in applying proven culturally relevant pedagogical practices in urban and urban-like schools to promote increased educational success for all youth.',
            'We seek to transform education through social and community engagement and prepare educators with the educational interventions and resources that develop the cultural competencies for under-prepared students to achieve success.'
        ]
    },
    {
        headline: 'Join Us',
        paragraphs: [
            'We’re just getting started. Whether you’re interested in our services or just want to follow along, you can join us today by signing up for our newsletter.'
        ]
    }]

const StyledMain = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    margin-top: 60px;
    padding: 0 150px;
    padding-bottom: 340px;
`

const StyledLogoContainer = styled.div`
    display: flex;
    justify-content: center;
    width: 40%;
`

const StyledCopyContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;

    width: 60%;
    height: 100%;
    margin-left: 100px;
`

function Main() {
    return (
        <StyledMain>
            <StyledLogoContainer>
                <Logo/>
            </StyledLogoContainer>
            <StyledCopyContainer>
                {/* Dynamically generates blocks of copy from copy object. */}
                { copy.map((block, i) => <CopyBlock 
                                            key={block.headline + i}
                                            headline={block.headline}
                                            paragraphs={block.paragraphs}
                                         />
                )}
                <Subscription/>
            </StyledCopyContainer>
        </StyledMain>
    )
}

export default Main