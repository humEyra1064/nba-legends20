import { Container, Image } from "react-bootstrap"
import logo from "../../assets/nba-logo.png"


const Header = () => {
  return (
   
      <Container>
        
      <Image src={logo} width="200px"></Image>
      <h1 className="my-2 font-monospace display-4 fw-bold">NBA LEGENDS</h1>
      </Container>
      
  
  )
}

export default Header
