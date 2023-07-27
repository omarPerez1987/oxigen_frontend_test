import "./myHeader.css";
import iconConvert from "./Exchange.png";

const MyHeader = () => {
  return (
    <header className="container-header">
      <img className="icon-header" src={iconConvert} alt="icono de flechas"></img>
      <h1 className="title-header">unit converter</h1>
    </header>
  );
};

export default MyHeader;
