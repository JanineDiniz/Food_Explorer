import { Container, Header, Title, Button, Search, Logout } from "./styles";
import {CiCircleRemove, CiSearch} from 'react-icons/ci'

export function SideMenu({menuIsOpen, onCloseMenu}){
  return(
    <Container data-menu-is-open={menuIsOpen}>
      <Header>
        <Button onClick={onCloseMenu}>
          <CiCircleRemove></CiCircleRemove>
        </Button>
        <Title>Menu</Title>
      </Header>
      <Search>
        <CiSearch></CiSearch>
        <input type="text" placeholder="Busque por pratos ou ingredientes" />
      </Search>
      <Logout>Sair</Logout>
    </Container>
  )

}