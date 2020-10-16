import styled from "styled-components"

export const FooterWrapper = styled.footer`
    height: 9rem;
    background: #222;
    text-align: center;
    display: grid;
    place-items: center;

    h4 {
        margin-top: 0.5rem;
        color: ${props => props.theme.clrWhite};
        font-weight: normal;
        text-transform: uppercase;
    }
    h4 span {
        color: ${props => props.theme.clrPrimary5};
    }

    .footer-links {
        margin: 0 auto 1rem auto;
    }
    & .social-link {
        color: ${props => props.theme.clrWhite};
    }
    & .social-link:hover {
        color: ${props => props.theme.clrPrimary5};
    }
`