import styled, { css } from 'styled-components'
import { useState } from 'react'
import MailchimpSubscribe from 'react-mailchimp-subscribe'
import { device } from '../utils/media-breakpoints'
import parseMailchimpSubscribeMessage from '../utils/parseMailchimpSubscribeMessage'
import Button from './Button'
import { LottieError, LottieFail, LottieSuccess } from './LottieAnimations'

const StyledInputField = styled.input`
    height: 42px;
    width: 260px;
    border: none;
    border-radius: 5px;
    margin-right: 20px;
    margin-bottom: 20px;
    padding-left: 15px;
    font-size: 1em;
    line-height: 28px;
    outline: none;

    &::placeholder {
        color: #8C8C8C;
    }

    @media ${device.laptop} {
        width: 300px;
        margin-bottom: ${props => props.isFooter ? "20px" : "0px"};
    }
`

const StyledForm = styled.form`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: left;
    margin-bottom: 20px;
    margin-left: 50px;

    @media ${device.laptop} {
        flex-direction: ${props => props.isFooter ? "column" : "row"};
        align-items: ${props => props.isFooter ? "left" : "center"};
    }
`

const StyledFormDescription = styled.p`
    margin-top: 0px;
    font-size: 1.2em;
`

const StyledSuccessNotif = styled.div`
    display: flex;
    align-items: center;
    height: 42px;
    margin-bottom: 20px;
    p {
        color: ${props => props.theme.green};
        font-size: 1.2em;
        font-weight: 500;
    }
`

const StlyedErrorNotif = styled.div`
    position: absolute;
    bottom: -60px;
    display: flex;
    align-items: center;
`

const StyledErrorText = styled.p`
    font-weight: 500;

    ${props => props.error === 'true' && css`
        color: ${props => props.theme.orange};
    `}

    ${props => props.invalid === 'true' && css`
        color: ${props => props.theme.red};
    `}
`

const LottieWrapper = styled.div`
    display: flex;
    align-items: center;
    width: 28px;
    height: 28px;
    margin-right: 10px;
`

function Subscription(props) {

    const mailchimpURL = props.mailchimpURL
    const [emailIputText, setEmailInputText] = useState('')

    // Subscribe form data to MailChimp list.
    const submit = (e, subscribe) => {
        e.preventDefault();
        subscribe({EMAIL: emailIputText})
    }

    return (
        <>
            <StyledFormDescription>
                {props.formDescription}
            </StyledFormDescription>
            <MailchimpSubscribe
                url={mailchimpURL}
                render={({ subscribe, status, message }) => (

                    // If subscription was valid or redundant.
                    status === 'success' ||
                    parseMailchimpSubscribeMessage(message) === 'alreadySubscribed'
                    ?
                        <StyledSuccessNotif>
                            <LottieWrapper>
                                <LottieSuccess/>
                            </LottieWrapper>
                            {parseMailchimpSubscribeMessage(message) === 'alreadySubscribed'
                                ?
                                    <p>You're already subscribed.</p>
                                :
                                    <p>You're subscribed!</p>
                            }
                        </StyledSuccessNotif>

                    : // If form unsubmitted or subscription failed.

                        <StyledForm 
                            onSubmit={e => submit(e, subscribe)}
                            isFooter={props.isFooter}
                        >
                            <StyledInputField
                                type='email'
                                placeholder='Email Address'
                                onChange={e => setEmailInputText(e.target.value)}
                                isFooter={props.isFooter}
                            />
                            <Button text='Subscribe'/>
                            <StlyedErrorNotif>
                                {/* If the mailchimp integration returns a non-specified error. */}
                                {parseMailchimpSubscribeMessage(message) === 'otherError' &&
                                    <>
                                        <LottieWrapper>
                                            <LottieError/>
                                        </LottieWrapper>
                                        <StyledErrorText error="true">An error occured. Please try again later.</StyledErrorText>
                                    </>
                                }

                                {/* If the mailchimp integration returns an invalid email error. */}
                                {parseMailchimpSubscribeMessage(message) === 'invalidEmail' &&
                                    <>
                                        <LottieWrapper>
                                            <LottieFail/>
                                        </LottieWrapper>
                                        <StyledErrorText invalid="true">Invalid email address.</StyledErrorText>
                                    </>
                                }
                            </StlyedErrorNotif>
                        </StyledForm>
                )}
            />
        </>
    )
}
  
export default Subscription