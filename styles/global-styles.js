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
  background-color: lightgrey;
}

html {
  scroll-behavior: smooth;
  height: 100%; 
  min-width: 100%;

}

a {
  text-decoration: none;
}
`;
