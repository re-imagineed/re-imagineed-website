import styled, { css } from 'styled-components'
import { device } from '../utils/media-breakpoints'


const StlyedContact = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    * {
        color: white;
        margin-top: 0px;
    }

    p { margin-bottom: 5px; }

    @media ${device.laptop} {
        flex-direction: row;
    }
`

const StyledContactList = styled.span`
    display: flex;
    flex-direction: column;
    padding-top: 7px;

    @media ${device.laptop} {
        margin-left: 60px;
    }
`

const ContactItem = styled.div`
    margin-right: 60px;
    margin-bottom: 20px;

    a {
        text-decoration: underline;

        p:hover {
            opacity: 80%;
        }
    }
`

const ItemTitle = styled.span`
    ${props => props.name && css`
        font-weight: bold;
    `}

    ${props => props.title && css`
        font-style: italic;
    `}
`

function Contact(props) {
    return (
        <StlyedContact>
            <h2>Contact</h2>
            <StyledContactList>
                <ContactItem>
                    <p><ItemTitle name='true'>Isiah King</ItemTitle>
                        &nbsp;&nbsp;<ItemTitle title='true'>founder</ItemTitle></p>
                    <a href='mailto:iking@re-imagineed.org' title='Email Isiah'>
                        <p>iking@re-imagineed.org</p>
                    </a>
                </ContactItem>
                <ContactItem>
                    <p><ItemTitle name='true'>Keith Streicher</ItemTitle>
                        &nbsp;&nbsp;<ItemTitle title='true'>founder</ItemTitle></p>
                    <a href='mailto:keith@re-imagineed.org' title='Email Keith'>
                        <p>keith@re-imagineed.org</p>
                    </a>
                </ContactItem>
                <ContactItem><p>(262) 993-0031</p></ContactItem>
            </StyledContactList>
        </StlyedContact>
    )
}

export default Contact