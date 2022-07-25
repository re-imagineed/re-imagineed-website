import styled from 'styled-components'
import { device } from '../utils/media-breakpoints'
import Contact from './Contact'
import Socials from './Socials'
import Subscription from './Subscription'


const StyledFooter = styled.footer`
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    background-color: ${props => props.theme.navy};

    @media ${device.laptop} {
        height: 350px;
    }
`

const StyledContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    align-items: center;
    justify-content: space-between;
    width: 90%;
    max-width: 1400px;
    padding: 30px 0;

    @media ${device.laptop} {
        flex-direction: row;
    }
`

const StyledSubscriptionWrapper = styled.div`
    
    margin-bottom: 30px;

    h2 {
        color: ${props => props.theme.white};
        margin-top: 0px;
    }

    p {
        color: ${props => props.theme.white};
    }

    button {
        background-color: ${props => props.theme.yellow};
        color: ${props => props.theme.navy};
    }
`

function Footer(props) {
    return (
        <StyledFooter>
           <StyledContentWrapper>
    
                {props.isHomePage ? null :
                    <StyledSubscriptionWrapper>
                        <h2>Subscribe</h2>
                        <Subscription
                            mailchimpURL={props.mailchimpURL}
                            formDescription={"Join our newsletter for updates!"}
                            isFooter={!props.isHomePage}
                        />
                    </StyledSubscriptionWrapper>
                }
                <Socials/>
            </StyledContentWrapper>
        </StyledFooter>
    )
}

export default Footer