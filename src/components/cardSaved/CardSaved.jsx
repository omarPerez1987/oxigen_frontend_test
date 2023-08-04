import "./cardSaved.css";
import cruz from "./Cross.png";

const CardSaved = ({key, input, distance, result}) => {
  return (
    <div id={key} className="card-saved">
      <p>{`${key} ${input} ${distance[0]} → ${result} ${distance[1]}`}</p>
      <img src={cruz} alt="cruz de eliminar"/>
    </div>
  );
};

export default CardSaved;
