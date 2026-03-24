import {createGlobalStyle} from "styled-components";
import {theme} from "./Theme.ts";

export const GlobalStyle = createGlobalStyle`
  *, 
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    border: 0;
  }

  html {
    scroll-behavior: smooth;
  }
  
  body {
    margin: 0;
    font-family: "Montserrat", -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    background-color: ${theme.colors.primaryBg};
    color: ${theme.colors.font}; 
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    line-height: 1.2;
    min-width: 360px;
  }
  
  a {
    text-decoration: none;
    cursor: pointer;
    color: inherit;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }
  
  ul {
    list-style: none;
  }
  
  button {
    background-color: unset;
    cursor: pointer;
  }
  
  section{
    padding: 80px 0;
    
    @media ${theme.media.tablet} {
      padding: 60px 0;
    }

    @media ${theme.media.mobile} {
      padding: 40px 0;
    }
  }

  h1, h2, h3, p {
    @media ${theme.media.mobile} {
      word-break: break-word; /* Чтобы длинные слова не ломали верстку */
    }
  }
`

