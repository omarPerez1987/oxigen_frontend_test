import "./cardconvert.css";
import exchange from "./Exchange.png";

const CardConvert = () => {
  return (
    <section className="container-convert">
      <h2>convert</h2>
      <div className="container-select">
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
      </div>
    </section>
  );
};

export default CardConvert;
