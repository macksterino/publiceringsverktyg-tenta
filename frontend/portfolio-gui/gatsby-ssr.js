import React from "react"
import { createGlobalStyle, ThemeProvider } from "styled-components"
import Theme from "./src/themes/theme"

const GlobalStyles = createGlobalStyle`
    *,
    ::after,
    ::before {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    body {
      font-family: ${props => props.theme.ffSecondary};
      background: ${props => props.theme.clrWhite};
      color: ${props => props.theme.clrGrey1};
      line-height: 1.5;
      font-size: 0.875rem;
      margin-top: 5rem;
    }
    ul {
      list-style-type: none;
    }
    a {
      text-decoration: none;
    }

    h1,
    h2,
    h3,
    h4 {
      letter-spacing: ${props => props.theme.spacing};
      text-transform: capitalize;
      line-height: 1.25;
      margin-bottom: 0.75rem;
      font-family: ${props => props.theme.ffPrimary};
    }
    h1 {
      font-size: 3rem;
    }
    h2 {
      font-size: 2rem;
    }
    h3 {
      font-size: 1.25rem;
    }
    h4 {
      font-size: 0.875rem;
    }
    p {
      margin-bottom: 1.25rem;
      color: ${props => props.theme.clrGrey3};
    }
    @media screen and (min-width: 800px) {
      h1 {
        font-size: 4rem;
      }
      h2 {
        font-size: 2.5rem;
      }
      h3 {
        font-size: 1.75rem;
      }
      h4 {
        font-size: 1rem;
      }
      body {
        font-size: 1rem;
      }
      h1,
      h2,
      h3,
      h4 {
        line-height: 1;
      }
    }
    /*  global classes */

    .btn {
      text-transform: uppercase;
      background: ${props => props.theme.clrPrimary5};
      color: ${props => props.theme.clrPrimary9};
      padding: 0.375rem 0.75rem;
      letter-spacing: ${props => props.theme.spacing};
      display: inline-block;
      font-weight: 700;
      -webkit-transition: ${props => props.theme.transition};
      transition: ${props => props.theme.transition};
      font-size: 0.875rem;
      border: 2px solid transparent;
      cursor: pointer;
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
      border-radius: ${props => props.theme.radius};
    }
    .btn:hover {
      color: ${props => props.theme.clrPrimary1};
      background: ${props => props.theme.clrPrimary8};
    }
    .center-btn {
      display: block;
      width: 12rem;
      text-align: center;
      margin: 0 auto;
      margin-top: 3rem;
    }
    /* section */
    .section {
      padding: 5rem 0;
    }

    .section-center {
      width: 90vw;
      margin: 0 auto;
      max-width: 1170px;
    }
    @media screen and (min-width: 992px) {
      .section-center {
        width: 95vw;
      }

      .services-center {
        grid-template-columns: 1fr 1fr 1fr;
      }
    }
    .underline {
      width: 5rem;
      height: 0.25rem;
      margin-bottom: 1.25rem;
      background: ${props => props.theme.clrPrimary5};
      margin-left: auto;
      margin-right: auto;
    }
    .section-title {
      margin-bottom: 4rem;
      text-align: center;
    }
    .bg-grey {
      background: ${props => props.theme.clrGrey10};
    }
    /* page links */

    /* social links */
    .social-links {
      margin-top: 2rem;
      width: 15rem;
      display: flex;
      justify-content: space-between;
    }
    .social-link {
      font-size: 1.75rem;
      color: ${props => props.theme.clrGrey1};
      transition: ${props => props.theme.transition};
    }
    .social-link:hover {
      color: ${props => props.theme.clrPrimary5};
    }
    .projects {
        background: ${props => props.theme.clrGrey10};
    }
    .blog {
        display: block;
        margin-bottom: 2rem;
        background: ${props => props.theme.clrGrey10};
        border-radius: ${props => props.theme.radius};
        box-shadow: ${props => props.theme.lightShadow};
        transition: ${props => props.theme.transition};
    }
    .blog:hover {
        box-shadow: ${props => props.theme.darkShadow};
        transform: scale(1.02);
    }

    @media screen and (min-width: 576px) {
      .blogs-center {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(368px, 1fr));
        column-gap: 2rem;
      }
    }

    @media screen and (min-width: 676px) {
      .services-center {
        display: grid;
        grid-template-columns: 1fr 1fr;
        -webkit-column-gap: 2rem;
        -moz-column-gap: 2rem;
        column-gap: 2rem;
      }
    }

    // Sidebar
    // Hann inte riktigt klura ut hur man satte upp sidebar med styled components 
    // då den skulle byta styles beroende om sidebaren var öppen eller inte
    .sidebar {
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
    }
    .show-sidebar {
      opacity: 1;
      transform: translateX(0);
    }
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
      .sidebar {
        transform: translateX(-100%);
      }
    }
    /*
    =============== 
    Sidebar Animation
    ===============
    */
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

export const wrapRootElement = ({ element }) => (
        <ThemeProvider theme={Theme}>
            <GlobalStyles />
            {element}
        </ThemeProvider>
)