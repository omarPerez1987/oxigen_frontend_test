import "./cardconvert.css";
import exchange from "./Exchange.png";
import heart from "./Heart.png";

const CardConvert = () => {
  return (
    <main className="container-convert">
      <h2>convert</h2>
      <section className="container-select">
        <select name="select-convert">
          <option value="km">km → miles</option>
          <option value="miles">miles → km</option>
          <option value="feet">feet → meter</option>
          <option value="meter">meter → feet</option>
          <option value="cm">cm → inch</option>
          <option value="inch">inch → cm</option>
        </select>
        <img src={exchange} alt="flechas de conversion" />
        <input type="text" align="right" />
        <p>km</p>
      </section>
      <section className="select-convert-container">
        <img src={heart} alt="corazon" />
        <h3>
          62.12 <span>miles</span>
        </h3>
      </section>
    </main>
  );
};

export default CardConvert;
