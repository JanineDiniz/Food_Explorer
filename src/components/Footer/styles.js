import styled from "styled-components"
import { breakpoints } from "../../styles/breakpoints"

export const Container = styled.footer`
  width: 100%;
  height: 4.75rem;

  display: flex;
  align-items: center;
  justify-content: space-around;

  background-color: ${({ theme }) => theme.colors.dark_600};

  >span{
    font-size: .75rem;
  }

  @media(min-width: ${breakpoints.md}){
    >span{
      font-size: 1.2rem;
    }
  }
`

export const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: .9rem;
  font-weight: 500;
  >img{
    width: 1rem;
  }
  >span{
    width: max-content;
  }
  @media(min-width: ${breakpoints.md}){
    font-size: 1.5rem;
    >img{
      width: 1.5rem;
    }
  }

`