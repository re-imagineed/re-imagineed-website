import styled from 'styled-components'
import Subscription from './Subscription'
import { StyledSectionContentWrapper } from './Styled'
import { Styled2Columns, StyledImageWrapper } from '../pages/about'
import Image from 'next/image'

const StyledContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: auto;
    background-image: url("graphics/subscribe-banner.svg");
    background-repeat: none;
    background-position: top center;
`

function SubscribeBanner(props) {
    return (
        <StyledContainer>
            <StyledSectionContentWrapper>
                <Styled2Columns style={{marginLeft: "5vw"}}>
                        <StyledImageWrapper>
                            <Image
                                src="/images/isiah-keith.png"
                                width="502"
                                height="444"
                                alt="join"
                            />
                        </StyledImageWrapper>
              
                        <div class="h2-fluid">Join our email list for updates</div>
                        <Subscription
                            formDescription={""}
                            mailchimpURL={props.mailchimpURL}
                        />

                </Styled2Columns>
            </StyledSectionContentWrapper>
        </StyledContainer>
    )
}

export default SubscribeBanner