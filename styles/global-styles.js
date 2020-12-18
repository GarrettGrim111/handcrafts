import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

*{box-sizing: border-box;
padding: 0;
  margin: 0;
}

body {
    min-height: 100vh; 
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    overflow: hidden;
 
}

html {
          scroll-behavior: smooth;
        }


a {
  color: inherit;
  text-decoration: none;
}

`;
