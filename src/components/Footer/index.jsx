import { Container, Logo } from "./styles";
import logo from '../../assets/logo_footer.svg'

export function Footer(){

  return(

    <Container>
      <Logo>
        <img src={logo} alt="" />
        <span>food explorer</span>
      </Logo>
      <span>© 2023 - Todos os direitos reservados.</span>
    </Container>
  )
}