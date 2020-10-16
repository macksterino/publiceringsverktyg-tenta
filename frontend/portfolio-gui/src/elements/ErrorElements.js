import styled from "styled-components"

export const ErrorWrapper = styled.main`
    display: grid;
    place-items: center;
    background: ${props => props.theme.clrPrimary10};
    text-align: center;
    min-height: calc(100vh - 5rem - 9rem);

    h1,
    h2 {
        text-transform: uppercase;
        color: ${props => props.theme.clrPrimary1};
        margin-bottom: 2rem;
    }
`