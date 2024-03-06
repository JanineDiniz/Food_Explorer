import styled from "styled-components";

export const Container = styled.div`
  width: fit-content;
  height: 2rem;

  display: flex;
  align-items: center;
  justify-content: center;
  padding: .25rem .5rem;
  border-radius: .5rem;

  font-size: .875rem;
  font-weight: 100;

  background-color: ${({theme}) => theme.colors.dark_1000};
`