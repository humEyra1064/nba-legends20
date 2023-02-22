import PlayerCard from "../playercard/PlayerCard";

import { data } from "../../helper/data";

const CardContainer = () => {
  return (
    <div className="container">
      <form action="" className="form">
        <input className="search-bar" type="text" placeholder="Search Player" />
        <div className="card-container">
          {data.map((item) => (
            <PlayerCard {...item} />
          ))}
        </div>
      </form>
    </div>
  );
};

export default CardContainer;
