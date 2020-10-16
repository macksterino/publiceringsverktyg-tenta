import styled from "styled-components"

/* Denna var lite klurigare då man var tvungen att använda
sig av två olika styles för att gå från sidebar och tillbaka */

export const SidebarWrapper = styled.aside`
  background: ${props => props.theme.clrGrey10};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 999;
  display: grid;
  place-items: center;
  opacity: 0;
  transition: ${props => props.theme.transition};
  transform: translateX(-100%);

  .sidebar-links li {
    opacity: 0;
  }

  .sidebar-links li a {
    display: block;
    text-align: center;
    text-transform: capitalize;
    color: ${props => props.theme.clrGrey5};
    letter-spacing: ${props => props.theme.spacing};
    margin-bottom: 0.5rem;
    font-size: 2rem;
    transition: ${props => props.theme.transition};
    border-radius: ${props => props.theme.radius};
  }
  .sidebar-links li a:hover {
    background: ${props => props.theme.clrPrimary9};
    color: ${props => props.theme.clrPrimary5};
  }
  .close-btn {
    position: absolute;
    right: 4.75%;
    top: 2.75%;
    font-size: 2.5rem;
    background: transparent;
    border-color: transparent;
    color: ${props => props.theme.clrRedDark};
    cursor: pointer;
  }
  @media screen and (min-width: 992px) {
    transform: translateX(-100%);
  }
  // Animation
  .sidebar-links li {
    animation: slideRight 0.5s ease-in-out 0.3s forwards;
  }
  .sidebar-links li:nth-of-type(1) {
    animation-delay: 0.25s;
  }
  .sidebar-links li:nth-of-type(2) {
    animation-delay: 0.5s;
  }
  .sidebar-links li:nth-of-type(3) {
    animation-delay: 0.75s;
  }
  .sidebar-links li:nth-of-type(4) {
    animation-delay: 1s;
  }
  .sidebar-links li:nth-of-type(5) {
    animation-delay: 1.25s;
  }
  @keyframes slideRight {
    0% {
      transform: translateX(-200px);
      opacity: 0;
    }
    100% {
      transform: translateX(0);
      opacity: 1;
    }
  }
  .sidebar-icons li {
    opacity: 0;
    animation: slideUp 0.5s ease-in-out 0.3s forwards;
  }
  .sidebar-icons li:nth-of-type(1) {
    animation-delay: 0.25s;
  }
  .sidebar-icons li:nth-of-type(2) {
    animation-delay: 0.5s;
  }
  .sidebar-icons li:nth-of-type(3) {
    animation-delay: 0.75s;
  }
  .sidebar-icons li:nth-of-type(4) {
    animation-delay: 1s;
  }
  .sidebar-icons li:nth-of-type(5) {
    animation-delay: 1.25s;
  }
  @keyframes slideUp {
    0% {
      transform: translateY(200px);
      opacity: 0;
    }
    100% {
      transform: translateY(0);
      opacity: 1;
    }
  }
`
