import styled from 'styled-components'
import { breakpoints } from '../../styles/breakpoints'


export const Container = styled.aside`
  width: 100%;
  height: 100vh;
  grid-area: none;
  background-color: ${({theme}) => theme.colors.dark_400};

  display: flex;
  flex-direction: column;

  position: absolute;
  z-index: 1;
  transform: translateX(-100%);
  transition: transform .3s ease-in-out;

  &[data-menu-is-open="true"]{
    transform: translateX(0);
  }

  @media(min-width: ${breakpoints.md}){
    display: none;
  }
`

export const Header = styled.header`
  height: 6.5rem;
  display: flex;
  align-items: center;
  justify-content: left;
  padding: 0 1.5rem;
  gap: .5rem;
  background-color: ${({theme}) => theme.colors.dark_700};
  font-family: "Roboto", sans-serif;
  >svg{
    cursor: pointer;
  }
`

export const Title = styled.h1`
  font-size: 1.5rem;
  font-weight: 400;
`
export const Search = styled.div`
    width: auto;
    display: flex;
    align-items: center;
    margin: 2.25rem 1.75rem 0;
  
    padding: 0 1.25rem;
    border-radius: 10px;
    border: none;
    
    background-color: ${({theme}) => theme.colors.dark_900};;
    color: ${({theme}) => theme.colors.light_100};
    >svg{
      font-size: 1.5rem;
    }
    
    >input{
      width: 100%;
      height: 3rem;
      
      font-size: 1rem;
      border: 0;
      background-color: transparent;
      color: ${({theme}) => theme.colors.light_200};
      padding: 0 1rem;
  
  
      &:focus{
        outline: none;
      }
    }
`

export const Button = styled.button`
    background-color: transparent;
    border: none;
    display: flex;
    align-items: center;

  > svg {
    font-size: 2rem;
    color: ${({ theme }) => theme.colors.light_100};
  }
`;

export const Logout = styled.button`
  width: auto;
  height: 3.375rem;
  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.colors.dark_1000};

  text-align: start;
  margin: 2.25rem 1.75rem;

  font-size: 1.5rem;
  font-weight: 200;
  background-color: transparent;
  color: ${({ theme }) => theme.colors.light_100};

  cursor: pointer;
`