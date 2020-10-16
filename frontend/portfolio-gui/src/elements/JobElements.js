import styled from "styled-components"

export const JobsCenter = styled.div`
    width: 80vw;
    margin: 0 auto;
    max-width: ${props => props.theme.maxWidth};

    @media screen and (min-width: 992px) {
        width: 90vw;
        display: grid;
        grid-template-columns: 200px 1fr;
        column-gap: 4rem;
    }
`

export const JobsButtonContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-bottom: 4rem;

    .job-btn {
        background: transparent;
        border-color: transparent;
        text-transform: capitalize;
        font-size: 1.25rem;
        letter-spacing: ${props => props.theme.spacing};
        margin: 0 0.5rem;
        transition: ${props => props.theme.transition};
        cursor: pointer;
        padding: 0.25rem 0;
        line-height: 1;
    }

    .job-btn:hover {
        color: ${props => props.theme.clrPrimary5};
        box-shadow: 0 2px ${props => props.theme.clrPrimary5};
    }

    .active-btn {
        color: ${props => props.theme.clrPrimary5};
        box-shadow: ${props => props.theme.clrPrimary5};
    }

    @media screen and (min-width: 992px) {
        flex-direction: column;
        justify-content: flex-start;

        .job-btn {
            margin-bottom: 1rem;
        }

        .active-btn {
            box-shadow: -2px 0 ${props => props.theme.clrPrimary5};
        }

        .job-btn:hover {
            box-shadow: -2px 0 ${props => props.theme.clrPrimary5};
        }
    }
`

export const JobsInfo = styled.article`
    h3 {
        font-weight: 400;
    }

    h4 {
        text-transform: uppercase;
        color: ${props => props.theme.clrGrey5};
        background: ${props => props.theme.clrGrey9};
        display: inline-block;
        padding: 0.375rem 0.75rem;
        border-radius: ${props => props.theme.radius};
    }
`

export const JobsDate = styled.p`
    letter-spacing: ${props => props.theme.spacing}
`

export const JobsDesc = styled.div`
    display: grid;
    grid-template-columns: auto 1fr;
    column-gap: 2rem;
    align-items: center;
    margin-bottom: 1.25rem;

    p {
        margin-bottom: 0;
        color: ${props => props.theme.clrGrey3};
    }
`