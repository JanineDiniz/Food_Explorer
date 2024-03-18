import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: .5rem;
  font-family: "Roboto", sans-serif;
  
  >span{
    font-size: 1rem;
    color: ${({theme}) => theme.colors.light_400};
  }
  
  >select{
    width: 100%;
    height: 3rem;

    background-color: ${({theme}) => theme.colors.dark_900};
    border: none;
    border-radius: 10px;
    color: ${({theme}) => theme.colors.light_400};
    padding: 0 1rem;
    font-size: .875rem;

    &:focus{
      outline: none;
    }
  }
`