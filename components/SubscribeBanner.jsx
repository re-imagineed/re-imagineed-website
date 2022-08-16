import styled from 'styled-components'
import Subscription from './Subscription'
import { StyledSectionContentWrapper, StyledH3 } from './Styled'
import { StyledColumns, StyledImageWrapper } from '../pages/about'
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
                <StyledColumns style={{ marginTop: "5vw", marginLeft: "5vw" }}>
                    <div>
                        <StyledImageWrapper>
                            <Image
                                src="/images/isiah-keith.png"
                                width="612"
                                height="524"
                                alt="isiah-keith"
                            />
                        </StyledImageWrapper>
                </div>
                    <div style={{ marginTop: "8vw", marginLeft: "3vw" }}>
                        <StyledH3 >Join our email list for updates</StyledH3>
                        <Subscription
                            formDescription={""}
                            mailchimpURL={props.mailchimpURL}
                        />
                    </div>

                </StyledColumns>
            </StyledSectionContentWrapper>
        </StyledContainer>
    )
}

export default SubscribeBanner