import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

*{box-sizing: border-box;
padding: 0;
  margin: 0;
}

body {
    min-height: 100vh; 
    overflow: hidden;
 
}

html {
          scroll-behavior: smooth;
        }


a {
  color: inherit;
  text-decoration: none;
}

@font-face {
  font-family: "TangerineBold";
  src: url("fonts/Tangerine-Regular.ttf");
  font-style: cursive;
  font-weight: 400;
  font-display: swap;
}
@font-face {
  font-family: "Tangerine";
  src: url("fonts/Tangerine-Bold.ttf");
  font-style: cursive;
  font-weight: 700;
  font-display: swap;
}

`;
