import styled from 'styled-components'

const StyledCopyBlock = styled.div`
    margin-bottom: 20px;

    h1 {
        font-size: 2.5em;
    }

    p {
        font-size: 1.2em;
    }
`

function CopyBlock(props) {
    return (
        <StyledCopyBlock>
            <h1>{props.headline}</h1>
            {props.paragraphs.map((paragraph, i) => <p key={props.headline + 'Content' + i}>{paragraph}</p> ) }
        </StyledCopyBlock>
    )
  }
  
  export default CopyBlock