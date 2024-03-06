import { Container, Logo, Logout, Menu, ButtonMobile, ButtonDesk, Search} from "./styles";
import {CiReceipt, CiLogout, CiSearch, CiMenuBurger  } from 'react-icons/ci'
import logo from '../../assets/logo.svg'


export function Header({onOpenMenu}){
  return(
    <Container>
      <Menu onClick={onOpenMenu}>
        <CiMenuBurger></CiMenuBurger>
      </Menu>
      <Logo>
        <img src={logo} alt="" />
        <span>food explorer</span>
      </Logo>
      <Search>
        <CiSearch></CiSearch>
        <input type="text" placeholder="Busque por pratos ou ingredientes" />
      </Search>
      <ButtonMobile>
        <CiReceipt></CiReceipt>
      </ButtonMobile>
      <ButtonDesk>
        <CiReceipt></CiReceipt>
        <span>Pedidos</span>
      </ButtonDesk>
      <Logout >
        <CiLogout></CiLogout>
      </Logout>
    </Container>
  )
}