import styled from "styled-components"

export const AboutWrapper = styled.section`
    padding: 7rem 0;
    background: ${props => props.theme.clrGrey10};
    min-height: calc(100vh - 5rem - 9rem);

    .about-img {
        margin-bottom: 2rem;
        height: 25rem;
    }

    .about-text .section-title {
        margin-bottom: 2rem;
        text-align: left;
    }
    .about-text .underline {
        margin-left: 0;
        margin-right: 0;
    }
    .about-text p {
        line-height: 2;
    }

    .about-stack span {
        display: inline-block;
        background: ${props => props.theme.clrGrey9};
        color: ${props => props.theme.clrGrey5};
        margin-top: .5rem;
        margin-right: .5rem;
        padding: .25rem .5rem;
        border-radius: ${props => props.theme.radius};
        text-transform: uppercase;
        letter-spacing: 2px;
        font-size: .85rem;
    }

    @media screen and (min-width: 992px) {
        .about-center {
          display: grid;
          grid-template-columns: repeat(12, 1fr);
          align-items: center;
          column-gap: 4rem;
        }
        .about-img {
          grid-column: 1 / span 5;
          margin-bottom: 0;
        }
        .about-text {
          grid-column: 6 / -1;
        }
      }
`