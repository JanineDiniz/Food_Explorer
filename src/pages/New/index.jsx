import { Container, Back, Form, Descricao } from "./styles";
import {CiCircleChevLeft } from "react-icons/ci"
import {Header} from "../../components/Header"
import {Input} from "../../components/Input"
import {Button} from "../../components/Button"
import {Footer} from "../../components/Footer"
import { SelectImage } from "../../components/SelectImage";
import { SelectCategory } from "../../components/SelectCategory";
import {ItemIngredient} from "../../components/ItemIngredient" 

export function New(){
  return(
    <Container>
      <Header></Header>
      <main>
        <Back>
          <CiCircleChevLeft></CiCircleChevLeft>
          <span>voltar</span>
        </Back>
        <h1>Novo prato</h1>
        <Form>

          <SelectImage></SelectImage>
          <Input title="Nome" placeholder="Ex.: Salada Ceasar"></Input>
          <SelectCategory title="Categoria">
            <option value="refeicao">Refeições</option>
            <option value="sobremesa">Sobremesas</option>
            <option value="bebida">Bebidas</option>
          </SelectCategory>

          <div className="tags">
            <ItemIngredient value="Pão"></ItemIngredient>
            <ItemIngredient isNew={true} placeholder="Adicionar"></ItemIngredient>
          </div>
          <Input title="Preço" placeholder="R$00,00"></Input>

          <Descricao>
            <span>Descrição</span>
            <textarea name="" id="" placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"></textarea>
          </Descricao>

          <Button title="Salvar alterações"></Button>
        </Form>
      </main>
      <Footer></Footer>
    </Container>
  )
}