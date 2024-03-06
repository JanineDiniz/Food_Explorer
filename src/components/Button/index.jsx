import { Container } from "./styles";

export function Button({icon: Icon, title, loading=false}){
  return(
    <Container type="button" disabled={loading}>
      {Icon && <Icon/>}
      {loading ? 'Carregando...' : title}
    </Container>
  )
}