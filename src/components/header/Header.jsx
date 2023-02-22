import { Container, Image } from "react-bootstrap"
import logo from "../../assets/nba-logo.png"


const Header = () => {
  return (
   
      <Container>
        
      <h1>NBA LEGENDS</h1>
      <Image src={logo} width="200px"></Image>
      </Container>
      
  
  )
}

export default Header
