
import "./PlayerCard.css"
import {useState} from "react"
const PlayerCard = ({name,img,statistics}) => {
    const [showImage, setShowImage] = useState(true)

  return (
    <div className="player-card"
    onClick={()=>setShowImage(!showImage)}>
        {showImage && (
            <div>
            <img src={img} alt="" />
            <h3 className="title">{name}</h3>
        </div>
        )}

        {!showImage && (
            <ul>
        {statistics.map((item)=>{
            return(
                <li>{item}</li>
            )
        })}
        
     </ul>
        )}
        

        
     
        
      
    </div>
  )
}

export default PlayerCard
