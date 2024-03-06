import { createGlobalStyle } from "styled-components";
import { breakpoints } from "./breakpoints";

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root{
    font-size: 16px;

    @media(max-width: ${breakpoints.md}) {
      font-size: 12px;
    }
  }

  body{
    background-color: ${({theme}) => theme.colors.dark_400};
    color: ${({theme}) => theme.colors.light_300};
    font-family: 1rem;
    -webkit-font-smoothing: antialised;
  }

  body, button{
    font-family: "Poppins", sans-serif;
  }

  input{
    font-family: "Roboto", sans-serif;
  }

  a{
    text-decoration: none;
  }

  button, a{
    cursor: pointer;
    transition: filter 0.2s;
  }
  button:hover, a:hover{
    filter: brightness(.9);
  }
`