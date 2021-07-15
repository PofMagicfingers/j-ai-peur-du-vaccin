import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.text};
    font-family: Open Sans, Lato, Roboto, sans-serif;
  }

    a, a:link, a:visited {
    color: ${({ theme }) => theme.accent};
    text-decoration: none;
    border-bottom: 1px dashed;
    }

    a:hover, a:focus {
    text-decoration: none;
    border-bottom: 1px solid;
    }
`;

export default GlobalStyle;
