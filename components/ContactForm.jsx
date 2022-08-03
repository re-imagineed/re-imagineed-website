import styled, { css } from 'styled-components'
import { useState } from 'react'
import MailchimpSubscribe from 'react-mailchimp-subscribe'
import { device } from '../utils/media-breakpoints'
import parseMailchimpSubscribeMessage from '../utils/parseMailchimpSubscribeMessage'
import Button from './Button'
import { LottieError, LottieFail, LottieSuccess } from './LottieAnimations'
import { StyledP2, StyledP1, StyledInlineLink } from './Styled'
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
  margin-bottom: 10px;
  align-content: left;
  font-weight: bold;
  font-size: 1em;
  line-height: 1.5em;

  .column {
    float: left;
    width: 50%;
    padding: 50px;
    margin-bottom: 10px;
  }

  /* Clear floats after the columns */
  .row:after {
    content: "";
    display: table;
    clear: both;
  }

  .underline {
    text-decoration: underline;
  }

  ul {
    font-weight: bold;
  }

  li {
    font-weight: bold;
    margin-right: 20px;
    margin-bottom: 10px;
    padding-left: 15px;
  }

  @media ${device.laptop} {
    flex-direction: ${(props) => (props.isFooter ? "column" : "row")};
    align-items: ${(props) => (props.isFooter ? "left" : "center")};
  }

  Button.right {
    align-content: "right";
    justify-content: "right";
    margin-left: 500px;
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

const StyledButton2 = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: fit-content;
    // width: 100px;
    padding: 15px;
    border-radius: 5px;
    border: none;
    background: ${props => props.theme.navy};
    cursor: pointer;

    font-size: 1.2em;
    font-weight: bold;
    color: white;
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
            <div class="column">

                <StyledP1>
                    Fill out the contact form to learn more about the following programs and services:
                </StyledP1>
                {/* <h3 class="underline">Programs and Services </h3> */}
                <ul>
                    <li>Teacher Like Me Exploration Program </li>
                    <li>Ready, Set, Teach Program </li>
                    <li>RED Network Collaborative</li>
                    <li>Howard-Streicher & King Scholarship Foundation</li>
                </ul>

                <div style={{ width: "100%", height: "60px" }}></div>

                <StyledP1>Connect with Re-Imagine Education to discuss your organization's needs!</StyledP1>
                <ol>
                    <li>Schedule a 30 minute <StyledInlineLink target="_blank" href="https://calendly.com/isiah-king-1/30min">Consultation Meeting</StyledInlineLink> with our team</li>
                    <li>Complete our <StyledInlineLink target="_blank" href="https://docs.google.com/forms/d/e/1FAIpQLSfdFUadJx1nCJfO1siouNrgk23g-prQ3QNL02py7z5aFZwK2Q/viewform">Services Request Form</StyledInlineLink></li>
                </ol>
            </div>

            <div class="column">
            <div style={{ width: "100%", height: "60px" }}></div>
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
                <div style={{ width: "100%", height: "30px" }}></div>
                <StyledButton2 style={{ width: "150px", height: "50px" }}> Submit </StyledButton2>
            </div>
        </StyledForm>
    )
}

export default ContactUs