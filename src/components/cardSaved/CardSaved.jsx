import "./cardSaved.css";
import cruz from "./Cross.png";

const CardSaved = ({ id, input, distance, result, updateState }) => {
  return (
    <div className="card-saved">
      <p>{`${input} ${distance[0]} → ${distance[1]} ${result}`}</p>
      <img
        src={cruz}
        alt="cruz para eliminar"
        onClick={() => updateState(id)}
      />
    </div>
  );
};

export default CardSaved;
