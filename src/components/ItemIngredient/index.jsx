import { Container } from "./styles";
import {CiCirclePlus, CiCircleRemove} from "react-icons/ci"

export function ItemIngredient({isNew, value, onClick, ...rest}){
  return(
    <Container isNew={isNew}>
      <input type="text" value={value} readOnly={!isNew} {...rest} />
      <button type="button" onClick={onClick}>{isNew ? <CiCirclePlus/> : <CiCircleRemove/>}</button>
    </Container>

  )
}