import styled from 'styled-components'
import { device } from '../utils/media-breakpoints'

const membershipTable = [
    {cohort: "Mentorship", description: "Education Fellows (HS Junior/Senior)"},
    {cohort: "Cohort 1", description: "Aspiring Teachers"},
    {cohort: "Cohort 2", description: "New Teacher Development (0-3 yrs.)"},
    {cohort: "Cohort 3", description: "Experienced Teacher Development (3yrs +)"},
    {cohort: "Cohort 4", description: "Support Services (Social worker, Counselor, etc)"},
    {cohort: "Cohort 5", description: "School Leadership Development"},
]

const offeringsTable = [
    {name: "Prospective Members", description: "RED provides community, mentorship and support during your career as an educator."},
    {name: "School Leaders", description: "RED helps support you in developing and retaining teachers in your building that will be hard to replace."},
    {name: "District Officials", description: "RED can create a network of support across your network/district for a difficult to recruit and retain segment of teachers."},
]

const StyledTableWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    margin: 60px 0;

    width: 100%;
`

const StyledOfferingsTable = styled.div`
    width: 90%;
    border-radius: 20px;

    overflow: hidden;
`

const StyledMembershipTable = styled.div`
    width: 90%;
    border-radius: 20px;

    overflow: hidden;

    @media ${device.laptop} {
        width: 70%;
    }
`

const StyledHeader = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    padding: 10px 20px;
    background-color: ${props => props.theme.yellow};

    h2 {
        margin: 0;
    }

    @media ${device.laptop} {
        padding: 20px 30px;
    }
`

const StyledTableBody = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    width: 100%;
    background-color: ${props => props.theme.lightgrey};
    padding: 10px 0px 20px 0px;
`

const StyledDividerWrapper = styled.div`
    position: absolute;
    left: 35%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`

const StyledVerticalDivider = styled.div`
    width: 0px;
    height: 80%;
    background-color: ${props => props.theme.white};

    @media ${device.laptop} {
        width: 2px;
    }
`

const StyledHorizontalDivider = styled.div`
    height: 0px;
    width: 80%;

    align-self: center;

    background-color: ${props => props.theme.white};

    @media ${device.laptop} {
        height: 2px;
    }
`
const StyledRowWrapper = styled.div`
    display: flex;
    flex-direction: column;
`
const StyledRow = styled.div`
    display: flex;
    flex-direction: column;
    padding: 10px 20px;

    @media ${device.laptop} {
        flex-direction: row;
        padding: 20px 40px;
    }
`

const StyledTableItem = styled.h3`
    display: flex;
    width: 100%;

    margin: 10px 0px;
    padding-right: 0px;

    @media ${device.laptop} {
        width: 40%;
        margin: 10px 0px;
        padding-right: 100px;
    }
`

const StyledItemDescription = styled.p`
    display: flex;
    width: 100%;

    margin: 0;

    @media ${device.laptop} {
        width: 60%;
        margin: 10px 0px;
    }
`

export function OfferingsTable() {
    return (
        <StyledTableWrapper>
            <StyledOfferingsTable>
                <StyledHeader>
                    <h2>Who We Serve</h2>
                </StyledHeader>
                <StyledTableBody>
                    {offeringsTable.map((item, i) => 
                    <StyledRowWrapper key={i}>
                        <StyledRow>
                            <StyledTableItem>{item.name}</StyledTableItem>
                            <StyledItemDescription>{item.description}</StyledItemDescription>
                        </StyledRow>
                        {i == offeringsTable.length - 1 ? null : <StyledHorizontalDivider/> }
                    </StyledRowWrapper>
                    )}
                    <StyledDividerWrapper>
                        <StyledVerticalDivider/>
                    </StyledDividerWrapper>
                </StyledTableBody>
            </StyledOfferingsTable>
        </StyledTableWrapper>
    )
}

export function MembershipTable() {
    return (
        <StyledTableWrapper>
            <StyledMembershipTable>
                <StyledHeader>
                    <h2>Our Cohorts</h2>
                </StyledHeader>
                <StyledTableBody>
                    {membershipTable.map((item, i) => 
                    <StyledRowWrapper key={i}>
                        <StyledRow>
                            <StyledTableItem>{item.cohort}</StyledTableItem>
                            <StyledItemDescription>{item.description}</StyledItemDescription>
                        </StyledRow>
                        {i == membershipTable.length - 1 ? null : <StyledHorizontalDivider/> }
                    </StyledRowWrapper>
                    )}
                    <StyledDividerWrapper>
                        <StyledVerticalDivider/>
                    </StyledDividerWrapper>
                </StyledTableBody>
            </StyledMembershipTable>
        </StyledTableWrapper>
    )
}