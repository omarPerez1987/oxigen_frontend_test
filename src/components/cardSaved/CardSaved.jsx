import "./cardSaved.css";
import cruz from "./Cross.png";

const CardSaved = ({ key, index, input, distance, result, updateState }) => {
  
  const handleDeleteCard  = () => {
    updateState(index);
  };
  return (
    <div id={key} className="card-saved">
      <p>{`${index} ${input} ${distance[0]} → ${result} ${distance[1]}`}</p>
      <img src={cruz} alt="cruz de eliminar" onClick={handleDeleteCard } />
    </div>
  );
};

export default CardSaved;
