import styled from 'styled-components'
import { useState } from 'react'
import MailchimpSubscribe from 'react-mailchimp-subscribe'
import Button from './Button'

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

function Subscription() {

    const mailchimpURL = 'https://holbertonschool.us7.list-manage.com/subscribe/post?u=5080e466c5f746c8b294721bc&amp;id=c3ed33fa09'
    const [emailIputText, setEmailInputText] = useState('')

    const submit = (e, subscribe) => {
        e.preventDefault();

        // Subscribe form data to MailChimp list.
        subscribe({EMAIL: emailIputText})

        // // Validate email submission.
        // if (emailValidator.validate(emailIputText) == true) {

        //     // POST email to Strapi instance.
        //     axios.post('https://reimagine-strapi.herokuapp.com/email-addresses', {
        //         email: emailIputText,
        //     })
        //     .then(function (response) {
        //         console.log(response);
        //     })
        //     .catch(function (error) {
        //         console.log(error);
        //     });
        // } else {
        //     console.log('E-mail is invalid');
        // }
    }


    return (
        <>
            <StyledFormDescription>
                Subscribe to our newsletter for updates.
            </StyledFormDescription>
            <MailchimpSubscribe
                url={mailchimpURL}
                render={({ subscribe, status, message }) => (
                    <StyledForm onSubmit={e => submit(e, subscribe)}>
                        <StyledInputField
                            type='email'
                            placeholder='Email Address'
                            onChange={e => setEmailInputText(e.target.value)}
                        />
                        <Button text='Subscribe'/>
                        <p>{status}</p>
                        <p>{message}</p>
                    </StyledForm>
                )}
            />
        </>
    )
  }
  
  export default Subscription