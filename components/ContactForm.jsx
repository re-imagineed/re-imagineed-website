import styled, { css } from 'styled-components'
import { useState } from 'react'
import MailchimpSubscribe from 'react-mailchimp-subscribe'
import { device } from '../utils/media-breakpoints'
import parseMailchimpSubscribeMessage from '../utils/parseMailchimpSubscribeMessage'
import Button from './Button'
import { LottieError, LottieFail, LottieSuccess } from './LottieAnimations'

const StyledInputField = styled.input`
  height: 32px;
  width: 260px;
  border: none;
  border-radius: 5px;
  margin-right: 20px;
  margin-bottom: 100px;
  padding-left: 15px;
  font-size: 1em;
  line-height: 28px;

  &::placeholder {
    color: #8c8c8c;
  }

  @media ${device.laptop} {
    width: 500px;
    margin-bottom: ${(props) => (props.isFooter ? "20px" : "10px")};
  }
`
const StyledTextAreaInputField = styled.textarea`
  height: 32px;
  width: 260px;
  border: none;
  border-radius: 5px;
  margin-right: 20px;
  margin-bottom: 100px;
  padding-left: 15px;
  font-size: 1em;
  line-height: 28px;

  &::placeholder {
    color: #8c8c8c;
  }

  @media ${device.laptop} {
    width: 500px;
    margin-bottom: ${(props) => (props.isFooter ? "20px" : "10px")};
  }
`

const StyledForm = styled.form`
  flex-direction: column;
  align-items: left;
  margin-bottom: 20px;
  align-content: left;

  .column {
    float: left;
    width: 50%;
  }

  /* Clear floats after the columns */
  .row:after {
    content: "";
    display: table;
    clear: both;
  }

  @media ${device.laptop} {
    flex-direction: ${(props) => (props.isFooter ? "column" : "row")};
    align-items: ${(props) => (props.isFooter ? "left" : "center")};
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

function ContactUs(props) {

    const mailchimpURL = props.mailchimpURL
    const [emailIputText, setEmailInputText] = useState('')
    const [nameInputText, setNameInputText] = useState('')
    const [phoneInputText, setPhoneInputText] = useState('')
    const [messageInputText, setMessageInputText] = useState('')


    const submit = (e, submit) => {
        e.preventDefault();
        submit({ NAME: nameInputText, EMAIL: emailIputText, PHONE: phoneInputText, MESSAGE: messageInputText })
    }

    return (

        <StyledForm id="contact-form">
            <StyledInputField
                type='text'
                placeholder='Name'
                required
                onChange={e => setNameInputText(e.target.value)}
                isFooter={props.isFooter}
            />

            <div>
                <StyledInputField
                    type='email'
                    placeholder='Email Address'
                    aria-describedby="emailHelp"
                    required
                    onChange={e => setNameInputText(e.target.value)}
                    isFooter={props.isFooter}
                />
            </div>

            <div>
                <StyledInputField
                    type='text'
                    placeholder='Phone Number'
                    onChange={e => setEmailInputText(e.target.value)}
                    isFooter={props.isFooter}
                />
            </div>

            <div>
                <StyledTextAreaInputField
                    placeholder='Type your message here ...'
                    row="5"
                    onChange={e => setMessageInputText(e.target.value)}
                    isFooter={props.isFooter}
                />

            </div>
            <Button text='Submit'/>
        </StyledForm>
    )
}

export default ContactUs