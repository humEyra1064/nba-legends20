import PlayerCard from "../playercard/PlayerCard";

import { Container } from "react-bootstrap";
import { data } from "../../helper/data";

const CardContainer = () => {
  return (
    
      <Container className="card-container rounded-4 my-4 p-3">

         {data.map((player)=>console.log(player))}
      </Container>
      
      
      );
    };
    
    export default CardContainer;

