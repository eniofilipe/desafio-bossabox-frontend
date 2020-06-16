import { createGlobalStyle } from "styled-components";
export default createGlobalStyle`
 
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  *:focus {
    outline: 0;
  }

  html, body, #root {
    height: 100%;
    background: #FCFCFD;
  }

  body {
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font:20px 'Source Sans Pro', sans-serif;
    color: #170C3A;
  }

  a {
    text-decoration: none;
  }

  ul{
    list-style: none;
  }

  button {
    cursor: pointer;
  }

`;
