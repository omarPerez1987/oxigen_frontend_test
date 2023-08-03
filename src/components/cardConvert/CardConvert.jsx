import "./cardconvert.css";

const CardConvert = () => {
  return (
    <section className="container-convert">
      <h2 className="title-convert">convert</h2>
      <div>
        <select name="select-convert" className="select-convert">
          <option value="km-mi">km → miles</option>
          <option value="mi-km">miles → km</option>
          <option value="ft-m">feet → meter</option>
          <option value="m-ft">meter → feet</option>
          <option value="cm-in">cm → inch</option>
          <option value="in-cm">inch → cm</option>
        </select>
      </div>
    </section>
  );
};

export default CardConvert;
