import React from "react";
import "./cardSaved.css";
import cruz from "./Cross.png";

const CardSaved = () => {
  return (
    <div className="card-saved">
      <p>100 miles → 160km</p>
      <img src={cruz} alt="cruz de eliminar" />
    </div>
  );
};

export default CardSaved;
