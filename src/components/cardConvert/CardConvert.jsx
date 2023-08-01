import { useState } from "react";
import "./cardconvert.css";
import exchange from "./Exchange.png";
import heart from "./Heart.png";

const CardConvert = () => {
  const [dataSelect, setDataSelect] = useState(["km", "miles"]);
  const [valueInput, setValueInput] = useState();

  return (
    <>
      <section>
        <div className="container-select">
          <div>
            <select
              name="select-convert"
              value={dataSelect}
              onChange={(e) => {
                const convertArrayAndSeparate = e.target.value.split(",");
                setDataSelect(convertArrayAndSeparate);
              }}
            >
              <option value={["km", "miles"]}>km → miles</option>
              <option value={["miles", "km"]}>miles → km</option>
              <option value={["feet", "meter"]}>feet → meter</option>
              <option value={["meter", "feet"]}>meter → feet</option>
              <option value={["cm", "inch"]}>cm → inch</option>
              <option value={["inch", "cm"]}>inch → cm</option>
            </select>
            <img src={exchange} alt="flechas de conversion" />
          </div>
          <input
            type="text"
            align="right"
            value={valueInput}
            onChange={(e) => setValueInput(e.target.value)}
          />
          <p>{dataSelect[0]}</p>
        </div>
        <div className="select-convert-container">
          <img src={heart} alt="corazon" />
          <h3>
            {valueInput} <span>{dataSelect[1]}</span>
          </h3>
        </div>
      </section>
    </>
  );
};

export default CardConvert;
