import styled from 'styled-components'

const StyledButton = styled.button`
    height: 42px;
    width: 120px;
    margin-left: 40px;
    border-radius: 5px;
    border: none;
    background: ${props => props.theme.yellow};
    cursor: pointer;
    outline: none;

    &:hover {
        opacity: 80%;
    }

    font-size: 1.2em;
    font-weight: bold;
    color: white;
`

function Button(props) {
    return (
        <StyledButton>{props.text}</StyledButton>
    )
  }
  
  export default Button