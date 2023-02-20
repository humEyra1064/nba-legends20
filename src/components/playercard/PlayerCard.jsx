

const PlayerCard = ({name,img,statistics}) => {
  return (
    <div className="player-card">
        <div>
            <img src={img} alt="" />
            <h3>{name}</h3>
        </div>

        <div>
     <ul>
        {statistics.map((item)=>{
            return(
                <li>{item}</li>
            )
        })}
        
     </ul>
        </div>
      
    </div>
  )
}

export default PlayerCard
