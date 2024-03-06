import styled from "styled-components";
import {breakpoints} from '../../styles/breakpoints'

export const Container = styled.header`
  grid-area: header;

  height: 6.5rem;
  width: 100%;

  background-color: ${({theme}) => theme.colors.dark_600};

  display: flex;
  align-items: center;
  justify-content: space-evenly;
  gap: 2rem;

  @media(min-width: ${breakpoints.md}){
    padding: 28px 123px;
    justify-content: center;
    gap: 2rem;
  }

`


export const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 1.5rem;
  font-weight: 500;
  >img{
    width: 1.5rem;
  }
  >span{
    width: max-content;
  }

`

export const Logout = styled.div`
  display: none;

  @media(min-width: ${breakpoints.md}){
    display: flex;
    align-items: center;
    font-size: 1.5rem;
    cursor: pointer;
  }

`
export const Menu = styled.button`
  background-color: transparent;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({theme}) => theme.colors.light_100};
  cursor: pointer;

  >svg{
    font-size: 1.5rem;
  }

  @media(min-width: ${breakpoints.md}){
    display: none;
  
  }
`
export const ButtonMobile = styled.button`
  background-color: transparent;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({theme}) => theme.colors.light_100};
  cursor: pointer;

  >svg{
    font-size: 1.8rem;
  }
  @media(min-width: ${breakpoints.md}){
    display: none;
  
  }
`
export const ButtonDesk = styled.button`
  display: none;

  @media(min-width: ${breakpoints.md}){

    width: fit-content;
    background-color: ${({theme}) => theme.colors.tomato_100};
    color: ${({theme}) => theme.colors.light_100};

    height: 3.5rem;
    border: 0;
    padding: .75rem 1.5rem ;
    border-radius: 10px;
    font-weight: 400;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: .25rem;

    >svg{
      font-size: 1.5rem;
    }
  }
`
export const Search = styled.button`
  display: none;

  @media(min-width: ${breakpoints.md}){
    width: 100%;
    display: flex;
    align-items: center;
  
    padding: 0 20px;
    border-radius: 10px;
    gap: .8rem;
    border: none;
    
    background-color: ${({theme}) => theme.colors.dark_900};;
    color: ${({theme}) => theme.colors.light_100};
    >svg{
      font-size: 1.5rem;
    }
    
    >input{
      width: 100%;
      height: 4rem;
      
      font-size: 1.25rem;
      border: 0;
      background-color: transparent;
      color: ${({theme}) => theme.colors.light_200};
      padding: 0 1.25rem;
  
      &::placeholder{
        text-align: center; 
      }
  
      &:focus{
        outline: none;
      }
    }
  }
`