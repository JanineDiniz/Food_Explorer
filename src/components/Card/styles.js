import styled from "styled-components";
import { breakpoints } from "../../styles/breakpoints";

export const Container = styled.div`
  width: 13.125rem;
  height: 18.25rem;
 
  display: flex;
  flex-direction: column;
  gap: .75rem;

  padding: 1.5rem;
  border-radius: 10px;
  position: relative;
  
  background-color: ${({theme}) => theme.colors.dark_200};

  >svg{
    font-size: 1.375rem;
    position: absolute;
    right: 0;
    top: 0;
    margin: 1rem;
    /* align-self: flex-end; */
  }

  @media(min-width: ${breakpoints.md}){
    width: 19rem;
    height: 28.875rem;
    gap: .94rem;

    >svg{
      font-size: 1.5rem;
    }
  }
`

export const Plate = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: .75rem;
  >img{
    width: 5.5rem;
  }
  >h1{
    font-size: .875rem;
    font-weight: 100;
  }
  >p{
    display: none;
  }
  >span{
    font-family: "Roboto", sans-serif;
    font-size: 1rem;
    color: ${({theme}) => theme.colors.cake_200};
  }
  @media(min-width: ${breakpoints.md}){
    gap: .94rem;
    >img{
      width: 11rem;
    }
    >h1{
      font-size: 1.5rem;
      font-weight: 500;
    }
    >p{
      display: block;
      width: 15rem;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      font-family: "Roboto", sans-serif;
      font-size: .875rem;
      font-weight: 200;
      text-align: center;
      color: ${({theme}) => theme.colors.light_400};

      /* &:hover{
      } */
    }
    >span{
      font-size: 2rem;
    }
  }
`
export const Include = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  >Button{
    height: 2rem;
  }
  @media(min-width: ${breakpoints.md}){
    width: 13rem;
    flex-direction: row;
    margin: 0 auto;

    >Button{
      height: 3rem;
    }
  }
`
export const Quantify = styled.div`
  display: flex;
  align-items: center;
  gap: .725rem;
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  >svg{
    font-size: 1.5rem;
  }
  @media(min-width: ${breakpoints.md}){
    >span{
      font-size: 1.25rem;
    }
  }
`