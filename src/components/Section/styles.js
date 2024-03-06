import styled from "styled-components";
import { breakpoints } from "../../styles/breakpoints";

export const Container = styled.section`
  margin: 28px 0;
  padding: 1.5rem;
  >h2{
    font-size: 1.125rem;
    font-weight: 400;
    color: ${({theme}) => theme.colors.light_300};
    margin-bottom: 1.5rem;
  }

  @media(min-width: ${breakpoints.md}){
    padding: 1.5rem 7.7rem;
    >h2{
      font-size: 2rem;
    }
  }
`;