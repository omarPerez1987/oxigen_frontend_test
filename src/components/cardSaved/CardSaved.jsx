import "./cardSaved.css";
import cruz from "./Cross.png";

const CardSaved = ({ id, input, distance, result, handleClickDelete }) => {
  return (
    <div className="card-saved">
      <p>{`${input} ${distance[0]} → ${distance[1]} ${result}`}</p>
        <img src={cruz} alt="cruz para eliminar" onClick={() => handleClickDelete(id)}></img>
    </div>
  );
};

export default CardSaved;
