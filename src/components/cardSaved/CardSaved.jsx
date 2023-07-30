import React from "react";
import "./cardSaved.css";
import cruz from "./Cross.png";

const CardSaved = () => {
  return (
    <aside>
      <section className="container-saved">
        <h3>saved</h3>
        <div className="card-saved">
          <p>100 miles → 160km</p>
          <img src={cruz} alt="cruz de eliminar" />
        </div>
      </section>
    </aside>
  );
};

export default CardSaved;
