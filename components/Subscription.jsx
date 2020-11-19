import styled from 'styled-components'
import Button from './Button'

const StyledInputField = styled.input`
    height: 28px;
    width: 300px;
    border: none;
    border-radius: 5px;
    padding-left: 15px;
    font-size: .9em;
    line-height: 28px;
    outline: none;

    &::placeholder {
        color: #8C8C8C;
    }
`

const StyledSubscription = styled.form`
    margin-bottom: 40px;
`

function Subscription(props) {
    return (
        <StyledSubscription>
            <StyledInputField type='email' placeholder='Email Address'/>
            <Button text='Subscribe'/>
        </StyledSubscription>
    )
  }
  
  export default Subscription