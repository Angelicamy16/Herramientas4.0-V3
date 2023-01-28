import * as React from "react";
import "./App.css";
import arrowBigDown from "./assets/arrowBigDown.svg";
import group68 from "./assets/group68.svg";
import rectangle74 from "./assets/rectangle74.svg";
import area1 from "./assets/area1.svg";
const App = () => {
  return (
    <div className="prueba-web">
      <div className="flex-container">
        <div className="top-menu">
          <div className="frame-41">
            <span className="tina-app">Tina App</span>
            <span className="home">Home</span>
            <span className="comunidad">Comunidad</span>
            <span className="nosotros">Nosotros</span>
            <button className="botton">
              <img className="arrow-big-down" src={arrowBigDown} />
              <span className="descarga-tina">Descarga Tina</span>
            </button>
          </div>
        </div>
        <img className="area-1" src={area1} />
      </div>
      <div className="flex-container-1">
        <div className="flex-container-2">
          <div className="flex-container-3">
            <span className="q-ue-hace-tina">¿QUe hace tina?</span>
            <img className="rectangle-74" src={rectangle74} />
          </div>
          <span className="lorem-ipsum-dolor-si">
            Lorem ipsum dolor sit amet, consectetur ad consectetur adipiscing
            elit ut aliquam, purus sit amet luctus venenatis ipiscing elit ut
            aliquam, purus sit amet luctus venenatis Lorem ipsum dolor sit amet,
            consectetur ad consectetur adipiscing elit ut aliquam, purus sit
            amet luctus venenatis ipiscing elit ut aliquam, purus sit amet
            luctus venenatis.
          </span>
          <button className="frame-51">
            <span className="descargar-app">Descargar APP</span>
          </button>
        </div>
        <img className="group-68" src={group68} />
      </div>
    </div>
  );
};
export default App;

