import { Container } from "./styles";

export function TagIngredient({title, ...rest}){
  return(
    <Container {...rest}>
      {title}
    </Container>

  )
}