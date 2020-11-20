import styled from 'styled-components'
import { useState } from 'react'
import MailchimpSubscribe from 'react-mailchimp-subscribe'
import Button from './Button'
import Lottie from 'react-lottie'
import animationData from '../public/lotties/check-success-anim.json'

const StyledInputField = styled.input`
    height: 42px;
    width: 300px;
    border: none;
    border-radius: 5px;
    margin-right: 20px;
    padding-left: 15px;
    font-size: .9em;
    line-height: 28px;
    outline: none;

    &::placeholder {
        color: #8C8C8C;
    }
`

const StyledForm = styled.form`
    display: flex;
    margin-bottom: 20px;
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
        font-weight: 600;
    }
`

const LottieWrapper = styled.div`
    width: 28px;
    height: 28px;
    margin-right: 10px;
`

function Subscription() {

    const mailchimpURL = 'https://holbertonschool.us7.list-manage.com/subscribe/post?u=5080e466c5f746c8b294721bc&amp;id=c3ed33fa09'
    const [emailIputText, setEmailInputText] = useState('')
    const [submissionStatus, setSubmissionStatus] = useState('');

    const defaultLottieOptions = {
        loop: false,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
      };

    const submit = (e, subscribe) => {
        e.preventDefault();

        // Subscribe form data to MailChimp list.
        subscribe({EMAIL: emailIputText})
    }

    return (
        <>
            <StyledFormDescription>
                Subscribe to our newsletter for updates.
            </StyledFormDescription>
            <MailchimpSubscribe
                url={mailchimpURL}
                render={({ subscribe, status, message }) => (
                    status === 'success' || status === 'error' ?
                        <StyledSuccessNotif>
                            <LottieWrapper>
                                <Lottie
                                    options={defaultLottieOptions}
                                    height={28}
                                    width={28}
                                />
                            </LottieWrapper>
                            {status === 'success' && <p>You're subscribed!</p>}
                            {status === 'error' && <p>You're already subscribed.</p>}
                        </StyledSuccessNotif>
                    :
                        <StyledForm onSubmit={e => submit(e, subscribe)}>
                            <StyledInputField
                                type='email'
                                placeholder='Email Address'
                                onChange={e => setEmailInputText(e.target.value)}
                            />
                            <Button text='Subscribe'/>
                        </StyledForm>
                )}
            />
        </>
    )
  }
  
  export default Subscription