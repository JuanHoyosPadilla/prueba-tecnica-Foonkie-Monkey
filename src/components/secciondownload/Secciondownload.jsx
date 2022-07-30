import "./estilos.css";
import { IconoSVG } from "../IconoSVG";
import { Link } from "react-router-dom";
export function Secciondownload() {
  return (
    <div className="seccion-boton-download">
      <div className="btn">
        <button><Link className="link" to="/usuarios">Download</Link> </button>
      </div>
      <div className="icono">
        <IconoSVG />
      </div>
    </div>
  );
}
