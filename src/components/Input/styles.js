import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: .5rem;
  font-family: "Roboto", sans-serif;
  color: ${({theme}) => theme.colors.light_400};

  >span{
    font-size: 1rem;
  }
`

export const InputArea = styled.div`
  width: 100%; //ajustar o SignIn e SignUp
  display: flex;
  align-items: center;

  padding: 0 1rem;
  border-radius: 10px;
  gap: .875rem;
  
  background-color: ${({theme}) => theme.colors.dark_800};;
  color: ${({theme}) => theme.colors.light_400};
  
  >input{
    width: 100%;
    height: 3rem;
    
    font-size: 1rem;
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