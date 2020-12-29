import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

@font-face {
  font-family: "TangerineBold";
  src: url("fonts/Tangerine-Regular.ttf") format("truetype");;
  font-style: cursive;
  font-weight: 400;
  font-display: swap;
}

@font-face {
  font-family: "Tangerine";
  src: url("fonts/Tangerine-Bold.ttf") format("truetype");;
  font-style: cursive;
  font-weight: 700;
  font-display: swap;
}



  
/* @font-face {
    font-family: "Ubuntu";
    src: url("/fonts/Ubuntu-Bold.ttf") format("truetype");
    font-weight: 700;
    font-style: normal;
} */

* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

body {
  min-height: 100vh; 
  font-family: sans-serif;
}

html {
  scroll-behavior: smooth;
}

a {
  text-decoration: none;
}
`;
