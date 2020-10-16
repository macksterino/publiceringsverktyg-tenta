import styled from "styled-components"

export const ServiceCard = styled.article`
  background: ${props => props.theme.clrWhite};
  padding: 3rem 1.5rem;
  margin-bottom: 2rem;
  border-radius: ${props => props.theme.radius};
  text-align: center;
  -webkit-transition: ${props => props.theme.transition};
  transition: ${props => props.theme.transition};

  & p {
    -webkit-transition: ${props => props.theme.transition};
    transition: ${props => props.theme.transition};
  }
  &:hover {
    background: ${props => props.theme.clrPrimary5};
    color: ${props => props.theme.clrPrimary9};
  }
  &:hover p {
    color: ${props => props.theme.clrPrimary9};
  }
  &:hover .underline {
    background: ${props => props.theme.clrPrimary9};
  }

  .underline {
    width: 3rem;
    height: 0.12rem;
    -webkit-transition: ${props => props.theme.transition};
    transition: ${props => props.theme.transition};
  }

  .service-icon {
    font-size: 2rem;
    margin-bottom: 1.5rem;
  }
`