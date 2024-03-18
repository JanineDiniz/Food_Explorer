import { Container } from "./styles";

export function SelectCategory({title, children}){
  return(
  <Container>
    <span>{title}</span>
    <select name="" id="">
      {children}
    </select>
  </Container>

  )
}