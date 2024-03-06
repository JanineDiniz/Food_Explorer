import {Container, Form, Logo} from './styles'
import logo from '../../assets/logo.svg'
import { Input } from '../../components/Input'
import {Button} from '../../components/Button'

export function SignUp(){
  return(
    <Container>
      <Logo>
        <img src={logo} alt="Imagem da logo" />
        <span>food explorer</span>
      </Logo>
      <Form>
        <h1>Crie sua conta</h1>
        <Input title="Seu nome" placeholder="Exemplo: Maria da Silva"></Input>
        <Input title="E-mail" placeholder="Exemplo: exemplo@exemplo.com.br"></Input>
        <Input title="Senha" placeholder="No mínimo 6 caracteres"></Input>
        <Button title="Criar conta"></Button>
        <a href='#'>Já tenho uma conta</a>
      </Form>
    </Container>
  )
}