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
                    <div class="left">
                        <StyledImageWrapper>
                            <Image
                                src="/images/isiah-keith.png"
                                width={573}
                                height={491}
                                alt="join"
                            />
                        </StyledImageWrapper>
                    </div>
                    <div class="right" style={{marginLeft:"2vw", marginTop:"10vw"}}>
                        <div class="h2-fluid">Join our email list for updates</div>
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