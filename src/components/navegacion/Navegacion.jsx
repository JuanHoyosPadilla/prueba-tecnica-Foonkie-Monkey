import "./navegacion.css";
import { LogoSVG } from "../../components/LogoSVG";
import { Link } from "react-router-dom";
export function Navegacion() {
  return (
    <div className="contenedor-nav">
      <div className="container-logo">
        <div className="logo">
          <LogoSVG />
        </div>
      </div>
      <div className="items">
        <ul>
          <li>
            <span className="a">
              <Link className="btn-home" to="/">
                Home
              </Link>
            </span>
          </li>
          <li>
            <span className="a">
              <Link className="btn-home" to="#">
                Item2
              </Link>
            </span>
          </li>
          <li>
            <span className="a">
              <Link className="btn-home" to="#">
                Item3
              </Link>
            </span>
          </li>
        </ul>
        <button>Login</button>
      </div>
    </div>
  );
}
