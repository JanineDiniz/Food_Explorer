import {Container} from './styles'
import { Button } from '../../components/Button'
import { Header } from '../../components/Header'
import { SideMenu } from '../../components/SideMenu'
import { TagIngredient } from '../../components/TagIngredient'
import { Card } from '../../components/Card'
import {Section} from '../../components/Section'
import { Footer } from '../../components/Footer'
import { useState } from 'react'


export function Home(){
  const [menuIsOpen, setMenuIsOpen] = useState(false)
    return (
      <Container>
        <Header onOpenMenu={() => setMenuIsOpen(true)}></Header>
        <SideMenu menuIsOpen={menuIsOpen} onCloseMenu={() => setMenuIsOpen(false)}></SideMenu>
        <Section title="Pratos Principais">       
        </Section>
        <Footer></Footer>
      </Container>
    )
}