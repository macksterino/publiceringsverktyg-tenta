import styled from "styled-components"

export const HeroWrapper = styled.header`
    margin-top: -5rem;
    padding-top: 5rem;
    height: 100vh;
    background: ${props => props.theme.clrPrimary10};
    position: relative;

    .underline {
        margin-bottom: 0.5rem;
        margin-left: 0;
    }
  
    .hero-center {
        height: 100%;
        display: grid;
        align-items: center;
    }

    .hero-img {
        display: none;
    }
  
    @media screen and (min-width: 992px) {
        &::before {
            content: "";
            position: absolute;
            top: 0;
            left: 65%;
            right: 0;
            bottom: 0;
            background: ${props => props.theme.clrWhite};
        }

        .hero-center {
            grid-template-columns: repeat(12, 1fr);
        }
  
        h4 {
            font-size: 0.85rem;
        }

        .hero-img {
            display: block;
            grid-row: 1/1;
            grid-column: 6/-1;
        }
    }
    
    @media screen and (min-width: 1170px) {
        .hero h4 {
            font-size: 1rem;
            line-height: 1;
        }
    }
`

export const HeroInfo = styled.article`
    background: ${props => props.theme.clrPrimary10};

    h4 {
        color: ${props => props.theme.clrGrey5};
    }

    @media screen and (min-width: 992px) {
        grid-row: 1/1;
        grid-column: 1 / span 8;
    }

    @media screen and (min-width: 1170px) {
        grid-column: 1 / span 8;
    }
`