import styled from "styled-components"

export const NavWrapper = styled.nav`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 5rem;
    display: flex;
    align-items: center;
    z-index: 200;
    background: ${props => props.theme.clrWhite};

    .nav-links {
      display: none;
    }

    .nav-center {
        width: 90vw;
        max-width: 1170px;
        margin: 0 auto;
    }

    .nav-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .nav-header img {
        margin-bottom: 0.375rem;
    }

    .toggle-btn {
        font-size: 2rem;
        background: transparent;
        border-color: transparent;
        color: ${props => props.theme.clrPrimary5};
        cursor: pointer;
        transition: ${props => props.theme.transition};
    }
    .toggle-btn:hover {
        color: ${props => props.theme.clrPrimary2};
    }

    @media screen and (min-width: 768px) {
        .toggle-btn {
          display: none;
        }
        
        .nav-center {
          display: grid;
          grid-template-columns: auto 1fr;
          align-items: center;
        }

        .nav-links {
          display: flex;
          justify-content: flex-end;
        }
        .nav-links li {
          margin-right: 2rem;
        }
        .nav-links a {
          text-transform: capitalize;
          color: ${props => props.theme.clrGrey1};
          font-weight: bold;
          letter-spacing: ${props => props.theme.spacing};
          transition: ${props => props.theme.transition};
          padding: 0.5rem 0;
        }
        .nav-links a:hover {
          color: ${props => props.theme.clrPrimary5};
          box-shadow: 0px 2px ${props => props.theme.clrPrimary5};
        }
    }

    @media screen and (min-width: 992px) {
        background: transparent;
    }
`