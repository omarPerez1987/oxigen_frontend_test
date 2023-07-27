import "./cardconvert.css";

const CardConvert = () => {
  return (
    <section className="container-convert">
      <h2>convert</h2>
      <div>
        <select name="select-convert" className="select-convert">
          <option value="km-mi">km → miles</option>
          <option value="mi-km">miles → km</option>
          <option value="ft-m">feet → metros</option>
          <option value="m-ft">metros → feet</option>
          <option value="cm-in">cm → pulgadas</option>
          <option value="in-cm">pulgadas → cm</option>
        </select>
      </div>
    </section>
  );
};

export default CardConvert;
