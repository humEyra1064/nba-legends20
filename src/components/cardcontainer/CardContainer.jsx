import PlayerCard from "../playercard/PlayerCard"
import "./CardContainer.css"
import {data} from "../../helper/data"

const CardContainer = () => {
  return (
    <div className="card-container">
        <input className="search-bar" type="text" placeholder="Search Player" />
        {data.map((item)=><PlayerCard {...item}/>) }
        
      
    </div>
  )
}

export default CardContainer
