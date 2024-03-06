import { Container, Plate, Include, Quantify } from "./styles";
import {CiCircleMinus, CiCirclePlus, CiHeart, CiSquareChevRight} from "react-icons/ci"
import { Button } from "../Button";


export function Card({image, title, desc, price, quantify}){
  return(
    <Container>
      <CiHeart></CiHeart>
      <Plate>
        <img src={image} alt="" />
        <h1>{title}</h1>
        <p>{desc}</p>
        <span>R${price}</span>
      </Plate>
      <Include>
        <Quantify>
          <CiCircleMinus/>
          <span>{quantify}</span>
          <CiCirclePlus/>
        </Quantify>
        <Button title="Incluir"></Button>
      </Include>
    </Container>
  )
}