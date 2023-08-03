import { useState } from "react";
import "./cardconvert.css";
import exchange from "./Exchange.png";
import heart from "./Heart.png";

const CardConvert = () => {
  const [dataSelect, setDataSelect] = useState(["km", "miles"]);
  const [valueInput, setValueInput] = useState("");
  
  const [changeInputByResult, setChangeInputByResult] = useState(false);
  
  // conversor de medidas
  let resConvert = valueInput;
  switch (dataSelect[0]) {
    case "km":
      resConvert = valueInput / 1.609344;
      break;
    case "miles":
      resConvert = valueInput * 1.609344;
      break;
    case "feet":
      resConvert = valueInput * 0.3048;
      break;
    case "meter":
      resConvert = valueInput / 0.3048;
      break;
    case "cm":
      resConvert = valueInput * 0.3937;
      break;
    default:
      resConvert = valueInput * 2.54;
      break;
  }


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
            <img
              src={exchange}
              alt="flechas de conversion"
              onClick={() =>
                !changeInputByResult ? setChangeInputByResult(true) : setChangeInputByResult(false) && setValueInput(resConvert)
              }
            />
          </div>
          {changeInputByResult ? (
            <>
              <input
                type="text"
                align="right"
                value={valueInput}
                onChange={(e) => setValueInput(e.target.value)}
              />
              <p>{dataSelect[1]}</p>
            </>

          ) : (
            <>
              <input
                type="text"
                align="right"
                value={valueInput}
                onChange={(e) => setValueInput(e.target.value)}
              />
              <p>{dataSelect[0]}</p>
            </>
          )}
        </div>
        <div className="select-convert-container">
          <img src={heart} alt="corazon" />
          {changeInputByResult ? (
            <h3>
              {valueInput} <span>{dataSelect[0]}</span>
            </h3>
          ) : (
            <h3>
              {resConvert.toFixed(2)} <span>{dataSelect[1]}</span>
            </h3>
          )}
        </div>
      </section>
    </>
  );
};

export default CardConvert;
