import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  

* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;

}

body {
  min-height: 100vh; 
  font-family: "Verdana", Geneva, Tahoma, sans-serif;
}

html {
  scroll-behavior: smooth;
  
}

a {
  text-decoration: none;
}
`;
