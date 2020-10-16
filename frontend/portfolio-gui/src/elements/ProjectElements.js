import styled from "styled-components"

export const ProjectWrapper = styled.article`
    display: grid;
    margin-bottom: 4rem;

    .project-img {
        border-top-left-radius: ${props => props.theme.radius};
        border-top-right-radius: ${props => props.theme.radius};
        height: 19rem;
        z-index: 1;
    }

    &:hover .project-img::after {
        opacity: 0;
    }

    .project-img::after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(to bottom right, ${props => props.theme.clrPrimary5}, #222);
        opacity: 0.85;
        transition: ${props => props.theme.transition};
    }

    @media screen and (min-width: 576px) {
        .project-img {
            height: 19rem;
        }
    }

    @media screen and (min-width: 768px) {
        .project-img {
            height: 22rem;
        }
    }

    @media screen and (min-width: 992px) {
        grid-template-columns: repeat(12, 1fr);
        align-items: center;

        .project-img {
            grid-column: 1 / span 8;
            /* grid-column-end: 8; */
            grid-row: 1 / 1;
            height: 30rem;
            border-radius: ${props => props.theme.radius};
            box-shadow: ${props => props.theme.darkShadow};
        }

        &:nth-of-type(even) .project-img {
            grid-column: 5 / -1;
            grid-row: 1 / 1;
        }
    }
`

export const ProjectInfo = styled.div`
    background: ${props => props.theme.clrWhite};
    padding: 1rem 2rem;
    border-bottom-left-radius: ${props => props.theme.radius};
    border-bottom-right-radius: ${props => props.theme.radius};

    h3 {
        font-weight: 500;
        margin-bottom: 1.5rem;
        font-size: 1.5rem;
    }

    .project-number {
        display: inline-block;
        font-size: 1.25rem;
        color: ${props => props.theme.clrPrimary5};
        margin-bottom: 0.75rem;
    }

    .project-desc {
        word-spacing: 15px;
        color: ${props => props.theme.clrGrey3};
    }

    .project-stack {
        margin-bottom: 1rem;
    }

    .project-stack span,
    .about-stack span {
        display: inline-block;
        background: ${props => props.theme.clrGrey9};
        color: ${props => props.theme.clrgrey5};
        margin-right: 0.5rem;
        padding: 0.25rem 0.5rem;
        border-radius: ${props => props.theme.radius};
        text-transform: uppercase;
        letter-spacing: 2px;
        font-size: 0.85rem;
    }

    .about-stack span {
        margin-top: 0.5rem;
    }

    .project-icon {
        color: ${props => props.theme.clrPrimary5};
        font-size: 1.25rem;
        margin-right: 0.5rem;
        transition: ${props => props.theme.transition};
    }

    .project-icon:hover {
        color: ${props => props.theme.clrPrimary1};
    }

    @media screen and (min-width: 992px) {
        border-radius: ${props => props.theme.radius};
        box-shadow: ${props => props.theme.darkShadow};
        z-index: 1;
        grid-column: 5 /12;
        grid-row: 1 / 1;

        ${ProjectWrapper}:nth-of-type(even) & {
            grid-column: 2 / span 7;
            grid-row: 1 / 1;
            text-align: left;
        }
    }
`