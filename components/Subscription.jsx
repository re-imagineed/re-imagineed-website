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
        margin-bottom: auto;
    }
`

const StyledForm = styled.form`
    position: relative;
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;

    @media ${device.laptop} {
        flex-direction: row;
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

    p {
        font-weight: 500;

        ${props => props.error && css`
            color: ${props => props.theme.orange};
        `}

        ${props => props.invalid && css`
            color: ${props => props.theme.red};
        `}
    }
`

const LottieWrapper = styled.div`
    display: flex;
    align-items: center;
    width: 28px;
    height: 28px;
    margin-right: 10px;
`

function Subscription() {

    const mailchimpURL = 'https://holbertonschool.us7.list-manage.com/subscribe/post?u=5080e466c5f746c8b294721bc&amp;id=c3ed33fa09'
    const [emailIputText, setEmailInputText] = useState('')

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
                    console.log(status),
                    console.log(message),


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

                    : // If subscribe unattempted or unable to subscribe.

                        <StyledForm onSubmit={e => submit(e, subscribe)}>
                            <StyledInputField
                                type='email'
                                placeholder='Email Address'
                                onChange={e => setEmailInputText(e.target.value)}
                            />
                            <Button text='Subscribe'/>
                            <StlyedErrorNotif>
                        {parseMailchimpSubscribeMessage(message) === 'otherError' &&
                            <>
                                <LottieWrapper>
                                    <LottieError/>
                                </LottieWrapper>
                                <p error='true'>An error occured. Please try again later.</p>
                            </>
                        }
                        {parseMailchimpSubscribeMessage(message) === 'invalidEmail' &&
                            <>
                                <LottieWrapper>
                                    <LottieFail/>
                                </LottieWrapper>
                                <p invalid='true'>Invalid email address.</p>
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

//   <>
//   <StyledFormDescription>
//       Subscribe to our newsletter for updates.
//   </StyledFormDescription>
//   <MailchimpSubscribe
//       url={mailchimpURL}
//       render={({ subscribe, status, message }) => (
//           console.log(message),
//           status === 'success' || status === 'error' ?
//               <StyledSuccessNotif>
//                   <LottieWrapper>
//                       <Lottie
//                           options={defaultLottieOptions}
//                           height={28}
//                           width={28}
//                       />
//                   </LottieWrapper>
//                   {status === 'success' && <p>You're subscribed!</p>}
//                   {status === 'error' && <p>You're already subscribed.</p>}
//               </StyledSuccessNotif>
//           :
//               <StyledForm onSubmit={e => submit(e, subscribe)}>
//                   <StyledInputField
//                       type='email'
//                       placeholder='Email Address'
//                       onChange={e => setEmailInputText(e.target.value)}
//                   />
//                   <Button text='Subscribe'/>
//               </StyledForm>
//       )}
//   />
// </>
// )
// }