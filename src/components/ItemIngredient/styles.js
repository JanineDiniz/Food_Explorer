import styled from "styled-components";

export const Container = styled.div`
  
  display: flex;
  align-items: center;

  background-color: ${({theme, isNew}) => isNew ? "transparent" : theme.colors.light_600};
  color: ${({theme}) => theme.colors.light_100};

  border: ${({theme, isNew}) => isNew ? `1px dashed ${theme.colors.light_500}` : "none"};

  border-radius:10px;
  padding-right: 16px;
  
  >button{
    display:flex;
    flex-direction:row;
    align-items:center;
    
    border:none;
    background:none;
    
    >svg{
      color: ${({theme, isNew}) => isNew ? theme.colors.light_500 : theme.colors.light_100};
    }
  }

  >input{
    height:2rem;
    width: 100%;
    

    padding: 1rem;
    color: ${({theme}) => theme.colors.light_100};
    background:transparent;
    border: none;

    &::placeholder{
      color: ${({theme}) => theme.colors.light_500};
    }
    &:focus{
      outline:none;
    }
  }
`;