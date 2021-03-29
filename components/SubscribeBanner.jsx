import styled from 'styled-components'
import Subscription from './Subscription'
import { StyledSectionContentWrapper } from './Styled'

const StyledContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 500px;
    background-image: url("graphics/subscribe-banner.svg");
    background-repeat: none;
    background-position: top center;
`

const StyledSubscribeHeader = styled.h1`
    font-size: 4em;
`

function SubscribeBanner(props) {
    return (
        <StyledContainer>
            <StyledSectionContentWrapper>
                <StyledSubscribeHeader>Join Us</StyledSubscribeHeader>
                <Subscription
                    formDescription={"Sign-up for our newsletter for updates and information on our programs."}
                    mailchimpURL={props.mailchimpURL}
                />
            </StyledSectionContentWrapper>
        </StyledContainer>
    )
}

export default SubscribeBanner