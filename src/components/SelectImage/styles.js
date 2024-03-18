import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: .5rem;

  >span{
    font-size: 1rem;
    font-family: "Roboto", sans-serif;
    color: ${({theme}) => theme.colors.light_400};
  }
  >label{
    >input{
      display: none;
    }
    width: 100%;
    height: 3rem;
    font-size: .875rem;
    
    background-color: ${({theme}) => theme.colors.dark_800};
    border-radius: 10px;

    display: flex;
    align-items: center;
    justify-content: center;
    
    gap: .5rem;

    cursor: pointer;
    >svg{
      font-size: 1.5rem;
      color: ${({theme}) => theme.colors.light_100};

    }
  }
`