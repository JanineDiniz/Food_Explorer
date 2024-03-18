import {Container} from './styles'
import { Button } from '../../components/Button'
import { Header } from '../../components/Header'
import { SideMenu } from '../../components/SideMenu'
import { TagIngredient } from '../../components/TagIngredient'
import { Card } from '../../components/Card'
import {Section} from '../../components/Section'
import { Footer } from '../../components/Footer'
import { useState } from 'react'
import plate1 from "../../assets/Mask group-1.png"


export function Home(){
  const [menuIsOpen, setMenuIsOpen] = useState(false)
    return (
      <Container>
        <Header onOpenMenu={() => setMenuIsOpen(true)}></Header>
        <SideMenu menuIsOpen={menuIsOpen} onCloseMenu={() => setMenuIsOpen(false)}></SideMenu>
        <Section title="Pratos Principais">   
          <Card image={plate1} title="torrada de Parma &gt;" desc="Massa fresca com camarões e pesto." price="75,50" quantify="01" ></Card>
        </Section>
        {/* <TagIngredient title="teste"></TagIngredient> */}
        {/* <Button title="Login" loading></Button> */}
        <Footer></Footer>
      </Container>
    )
}