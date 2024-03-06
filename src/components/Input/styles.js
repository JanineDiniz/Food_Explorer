import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: .5rem;

  >span{
    font-size: 1rem;
    font-family: "Roboto", sans-serif;
    font-weight: 300;
  }
`

export const InputArea = styled.div`
  width: 21.75rem;
  display: flex;
  align-items: center;

  padding: 0 20px;
  border-radius: 10px;
  gap: 14px;
  
  background-color: ${({theme}) => theme.colors.dark_900};;
  color: ${({theme}) => theme.colors.light_100};
  
  >input{
    width: 100%;
    height: 3rem;
    
    font-size: 18px;
    border: 0;
    background-color: transparent;
    color: ${({theme}) => theme.colors.light_200};

    &::placeholder{
      font-size: 1rem;
    }

    &:focus{
      outline: none;
    }
  }
`