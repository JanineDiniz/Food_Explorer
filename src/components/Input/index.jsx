import { InputArea, Container } from "./styles";

export function Input({title, icon: Icon, ...rest}){
  return(
    <Container>
      <span>{title}</span>
      <InputArea>
        {Icon && <Icon size={20}/>}
        <input {...rest}></input>
      </InputArea>
    </Container>
  )
}