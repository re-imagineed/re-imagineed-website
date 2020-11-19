import styled from 'styled-components'
import ComingSoonBanner from './ComingSoonBanner'
import Contact from './Contact'
import Socials from './Socials'


const StyledFooter = styled.footer`
    position: absolute;
    bottom: 0;
    width: 100%;

    display: flex;
    flex-direction: column;
`

const StyledContentWrapper = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    height: 240px;
    padding: 30px 120px;
    background-color: ${props => props.theme.navy};
`

function Footer() {
    return (
        <StyledFooter>
           <ComingSoonBanner/>
           <StyledContentWrapper>
                <Contact/>
                <Socials/>
            </StyledContentWrapper>
        </StyledFooter>
    )
}

export default Footer