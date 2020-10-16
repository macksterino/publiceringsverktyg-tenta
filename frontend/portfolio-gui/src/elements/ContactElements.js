import styled from "styled-components"

export const ContactWrapper = styled.section`
    display: grid;
    place-items: center;
    padding: 5rem 0;
    background: ${props => props.theme.clrGrey10};
    min-height: calc(100vh - 5rem - 9rem);

    .contact-form {
        background: ${props => props.theme.clrWhite};
        border-radius: ${props => props.theme.radius};
        text-align: center;
        box-shadow: ${props => props.theme.lightShadow};
        transition: ${props => props.theme.transition};
        width: 90vw;
        max-width: 35rem;
    }
    .contact-form:hover {
        box-shadow: ${props => props.theme.darkShadow};
    }
    .contact-form h3 {
        padding-top: 1.25rem;
        color: ${props => props.theme.clrGrey5};
    }

    .form-group {
        padding: 1rem 1.5rem;
    }

    .form-control {
        display: block;
        width: 100%;
        padding: 0.75rem 1rem;
        border: none;
        margin-bottom: 1.25rem;
        background: ${props => props.theme.clrGrey10};
        border-radius: ${props => props.theme.radius};
        text-transform: uppercase;
        letter-spacing: ${props => props.theme.spacing};
    }
    .form-control::placeholder {
        font-family: ${props => props.theme.ffPrimary};
        color: ${props => props.theme.clrGrey1};
        text-transform: uppercase;
        letter-spacing: ${props => props.theme.spacing};
    }

    .submit-btn {
        display: block;
        width: 100%;
        padding: 1rem;
        border-bottom-left-radius: ${props => props.theme.radius};
        border-bottom-right-radius: ${props => props.theme.radius};
        border-top-right-radius: 0;
        border-top-left-radius: 0;
    }
`