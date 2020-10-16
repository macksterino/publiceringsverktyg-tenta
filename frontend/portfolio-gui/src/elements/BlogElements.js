import styled from "styled-components"

export const BlogWrapper = styled.article`
    height: 100%;
    display: grid;
    grid-template-rows: auto 1fr;

    .blog-card {
        display: grid;
        grid-template-rows: auto 1fr auto;
    }
    .blog-card {
        padding: 1.5rem 1rem;
    }
    .blog-card h4 {
        color: ${props => props.theme.clrGrey1};
    }

    .blog-img {
        border-top-left-radius: ${props => props.theme.radius};
        border-top-right-radius: ${props => props.theme.radius};
        height: 15rem;
    }

    .blog-footer {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .blog-footer p {
        margin-bottom: 0;
        font-weight: bold;
        color: ${props => props.theme.clrGrey5};
    }
    .blog-footer p:first-of-type {
        display: inline-block;
        background: ${props => props.theme.clrGrey9};
        color: ${props => props.theme.clrGrey5};
        margin-right: 0.5rem;
        padding: 0.25rem 0.5rem;
        border-radius: ${props => props.theme.radius};
        text-transform: uppercase;
        letter-spacing: 2px;
        font-size: 0.85rem;
    }

    @media screen and (min-width: 576px) {
        .blogs-center {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(368px, 1fr));
          column-gap: 2rem;
        }

        .blog-img {
          height: 17.5rem;
        }
    }

    @media screen and (min-width: 850px) {
        .blog-img {
          height: 13.75rem;
        }
    }
`

export const TemplateWrapper = styled.section`
    background: ${props => props.theme.clrWhite};
    padding: 5rem 0;

    h1,
    h2 {
        text-align: center;
    }

    ul {
        margin-top: 2rem;
        display: inline-block;
    }
    ul li {
        background: ${props => props.theme.clrGrey9};
        color: ${props => props.theme.clrGrey5};
        padding: 0.5rem 1rem;
        margin: 1rem 0;
        text-transform: uppercase;
    }

    blockquote {
        background: ${props => props.theme.clrPrimary9};
        border-radius: ${props => props.theme.radius};
        padding: 1rem;
        line-height: 2;
        color: ${props => props.theme.clrPrimary5};
        margin: 2rem 0;
    }

    pre {
        background: #222;
        color: yellow;
        overflow-x: scroll;
        padding: 1rem 1.5rem;
        border-radius: ${props => props.theme.radius};
    }

    img {
        width: 15rem;
        height: 15rem;
        margin: 3rem 0;
    }
`