import "./estilos.css";
import {Link} from 'react-router-dom';
export function Popupmodanav({ cerrarNav }) {
  return (
    <div className="contenedor-popupnav">
      <div className="popupnav">
        <div className="popup-headernav">
          <span onClick={cerrarNav}>Cerrar</span>
        </div>
        <div className="popup-bodynav">
          <ul>
            <li>
              <span className="a">
                <Link className="btn-home" to="/">
                  Home
                </Link>
              </span>
            </li>
            <li>
              <span className="a" href="#">item2</span>
            </li>
            <li>
              <span className="a" href="#">item3</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
