import {Container, Form, Logo} from './styles'
import logo from '../../assets/logo.svg'
import { Input } from '../../components/Input'
import {Button} from '../../components/Button'

export function SignIn(){
  return(
    <Container>
      <Logo>
        <img src={logo} alt="Imagem da logo" />
        <span>food explorer</span>
      </Logo>
      <Form>
        <h1>Faça login</h1>
        <Input title="E-mail" placeholder="Exemplo: exemplo@exemplo.com.br"></Input>
        <Input title="Senha" placeholder="No mínimo 6 caracteres"></Input>
        <Button title="Entrar"></Button>
        <a href='#'>Criar uma conta</a>
      </Form>
    </Container>
  )
}