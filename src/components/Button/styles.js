import styled from "styled-components";

export const Container = styled.button`
  width: 100%;
  background-color: ${({theme}) => theme.colors.tomato_100};

  color: ${({theme}) => theme.colors.light_100};

  height: 3rem;
  border: 0;
  padding: .75rem 1.5rem ;
  border-radius: 10px;
  font-weight: 400;
  font-size: .875rem;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: .25rem;

  >svg{
    font-size: 1.5rem;
  }

  &:disabled{
    opacity: .5;
  }
`