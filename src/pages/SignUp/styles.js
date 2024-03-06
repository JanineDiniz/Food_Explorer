import styled from "styled-components";
import {breakpoints} from "../../styles/breakpoints"


export const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
  
  @media(min-width: ${breakpoints.md}){
    flex-direction: row;
    align-items: stretch;
  }
`

export const Form = styled.form`
  height: fit-content;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;
  justify-content: center;
  padding: 4rem;

  >h1{
    font-weight: 400;
    font-size: 1.5rem;

  }

  >a{
    color: ${({ theme }) => theme.colors.light_100};
  }
  @media(min-width: ${breakpoints.md}){
    background-color: ${({ theme }) => theme.colors.dark_700};
    margin: auto 6.75rem;
    
    >h1{
      font-size: 2rem;
    }
  }

`

export const Logo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  >span{
    font-size: 2rem;
    font-family: "Roboto", sans-serif;
    font-weight: 700;
  }
  >img{
    width: 2.5rem;
  }
  
  @media(min-width: ${breakpoints.md}){
    flex: 1;
    >span{
      font-size: 2.625rem;
    }
  }
`