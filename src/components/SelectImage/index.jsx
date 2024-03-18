import { Container } from "./styles";
import { CiExport } from "react-icons/ci";

export function SelectImage(){
  return(
  <Container>
    <span>Imagem do prato</span>
    <label htmlFor="prato">
      <CiExport ></CiExport>
      <span>Selecione imagem</span>
      <input id="prato" type="file" />
    </label>
  </Container>

  )
}