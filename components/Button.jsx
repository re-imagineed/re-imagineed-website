import styled from 'styled-components'

const StyledButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: fit-content;
    padding: 0.8vw;
    border-radius: 5px;
    border: none;
    background: ${props => props.theme.navy};
    cursor: pointer;
    outline: none;

    &:hover {
        opacity: 1;
        background: ${props => props.theme.lightblue};
    }

    // font-size: 1.2em;
    font-weight: 500;
    padding: 1vw;
    margin-left: 0vw;
    font-size: calc(1rem + 0.2vw);
    line-height: 1.4rem;
    color: white;
`

function Button(props) {
    return (
        <StyledButton onClick={props.onClick}>{props.text}</StyledButton>
    )
  }
  
  export default Button