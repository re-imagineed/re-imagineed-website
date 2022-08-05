import styled from 'styled-components'
import Subscription from './Subscription'
import { StyledSectionContentWrapper } from './Styled'
import { Styled2Columns, StyledIsiahKeith } from '../pages/about'

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
    font-size: 1.2em;
    font-weight: bold;
    margin: 120px 0px 20px 50px;
    
`

function SubscribeBanner(props) {
    return (
        <StyledContainer>
            <StyledSectionContentWrapper>
                <Styled2Columns>
                <div class="column">
<StyledIsiahKeith/>
                     </div>
                    <div class="column">

                <StyledSubscribeHeader>Join our email list for updates</StyledSubscribeHeader>
                <Subscription
                    formDescription={""}
                    mailchimpURL={props.mailchimpURL}
                />
                </div>
    
                </Styled2Columns>
            </StyledSectionContentWrapper>
        </StyledContainer>
    )
}

export default SubscribeBanner