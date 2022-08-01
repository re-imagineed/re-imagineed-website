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
    font-size: 1.7em;
    font-weight: normal;
`

function SubscribeBanner(props) {
    return (
        <StyledContainer>
            <StyledSectionContentWrapper>
                <StyledSubscribeHeader>Join our email list for updates</StyledSubscribeHeader>
                <Subscription
                    formDescription={""}
                    mailchimpURL={props.mailchimpURL}
                />
            </StyledSectionContentWrapper>
        </StyledContainer>
    )
}

export default SubscribeBanner