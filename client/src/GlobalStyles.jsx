import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin:0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
  }

  body{
    height:100vh;
    width:100vw;
    background-image: url("/background.jpg");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
`;
