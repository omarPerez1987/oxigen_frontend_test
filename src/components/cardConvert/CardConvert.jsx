import { useEffect, useState } from "react";
import "./cardconvert.css";
import exchange from "./Exchange.png";
import heart from "./Heart.png";
import CardSaved from "../cardSaved/CardSaved";

const CardConvert = () => {
  const [dataSelect, setDataSelect] = useState(["km", "miles"]);
  const [valueInput, setValueInput] = useState("");
  
  const [changeInputByResult, setChangeInputByResult] = useState(false);
  const [showNewCard, setShowNewCard] = useState([]);
  
  // switch convertidor
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
    // Cargar los datos del Local Storage al montar el componente
    useEffect(() => {
      const savedData = localStorage.getItem("mySavedData");
      if (savedData) {
        setShowNewCard(JSON.parse(savedData));
      }
    }, []);

  // funcion para crear nuevo objeto el cual se añadira al estado/array
  const handleClickShowNewCard = () => {
    const newComponent = {
      id: showNewCard.length,
      input: valueInput,
      distance: dataSelect,
      result: resConvert.toFixed(2),
    };
    setShowNewCard([...showNewCard, newComponent]);
    
    // Actualizar el Local Storage
    const showNewCardString = JSON.stringify([...showNewCard, newComponent]);
    localStorage.setItem("mySavedData", showNewCardString);
    
    // Input vuelve a un string vacío
    setValueInput("");
  };
  
  // funcion pasada a través de prop a CardSaved para que me devuelva
  // la posicion del array al hacer click y así actualizar el estado.
  const deleteAndUpdateState = (idReturn) => {
    const newShow = showNewCard.filter(
      (component) => component.id !== idReturn
      );
      setShowNewCard(newShow);
      
      // Actualizar el Local Storage
      const showNewCardString = JSON.stringify(newShow);
      localStorage.setItem("mySavedData", showNewCardString);
    };
    


  return (
    <>
      <main className="main-convert">
        <h2>convert</h2>
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
                  !changeInputByResult
                    ? setChangeInputByResult(true)
                    : setChangeInputByResult(false) && setValueInput(resConvert)
                }
              />
            </div>
            {changeInputByResult ? (
              <>
                <input
                  type="text"
                  align="right"
                  value={resConvert.toFixed(2)}
                  onChange={(e) => setValueInput(e.target.value)}
                  readOnly
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
            <img src={heart} alt="corazon" onClick={handleClickShowNewCard} />

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
      </main>
      <aside>
        <h3 className="title-saved">saved</h3>
        <section className="container-saved">
          {showNewCard.map(({ index, id, input, distance, result }) => (
            <CardSaved
              key={index}
              id={id}
              input={input}
              distance={distance}
              result={result}
              updateState={deleteAndUpdateState}
            />
          ))}
        </section>
      </aside>
    </>
  );
};

export default CardConvert;
