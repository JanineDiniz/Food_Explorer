import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 6.5rem auto;
  grid-template-areas: 
  "header"
  "content"
  ;
  
  >main{
    grid-area: content;
    overflow-y: auto;
    display: flex;
    flex-direction: column;

    padding: 2rem;
    gap: 1.5rem;

    h1{
      font-weight: 500;
    }
    .tags{
    width: 100%;
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;

    padding: 16px;
    background-color: ${({theme}) => theme.colors.dark_800};
    border-radius: 10px;
  }
  }
`
export const Back = styled.div`
  display: flex;
  align-items: center;
  gap: .5rem;

  >svg{
    font-size: 1.3rem;
  }
`
export const Form = styled.form`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  font-weight: 300;

  >Button{
    background-color: ${({theme}) => theme.colors.tomato_400};
  }


`

export const Descricao = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  >textarea{
    width: 100%;
    height: 10.75rem;
    resize: none;

    padding: 1rem;

    border: none;
    border-radius: 10px;
    background-color: ${({theme}) => theme.colors.dark_900};
    color: ${({theme}) => theme.colors.light_100};

    &:focus{
      outline: none;
    }
  }
`