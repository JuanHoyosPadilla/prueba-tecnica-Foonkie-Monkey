import "./estilo.css";
import { IconFacebook } from "../IconFacebook";
import { IconLinkedin } from "../IconLinkedin";
import { IconTwitter } from "../IconTwitter";
import { FlechaDerecha } from "../FlechaDerecha";
import lofoFoonki from "../../assets/image/FoonkieMonkey-Logo3.png";
export function Seccioncinco() {
  return (
    <div className="seccion-numero-5">
      <div className="mas-informacion">
        <div className="contacto">
          <img src={lofoFoonki} alt="imagen" />
          <span className="numero">+ 0 (0000) 000 00-00</span>
          <span className="correo">support@sniff.com</span>
        </div>

        <div className="links">
          <strong>Quick Links</strong>
          <span>Product</span>
          <span>Information</span>
        </div>

        <div className="links-mobile">
          <select>
            <option value="quick-links">Quick Links</option>
            <option value="product">Product</option>
            <option value="information">Information</option>
          </select>
          <i></i>
          <hr />
        </div>

        <div className="compañia">
          <span>Company</span>
          <span>Foonkie monkey</span>
        </div>

        <div className="suscribete">
          <span>Subscribe</span>
          <div>
            <input type="email" placeholder="Get product update" />
            <span className="flecha">
              <FlechaDerecha />
            </span>
          </div>
        </div>
      </div>

      <hr />

      <div className="banner">
        <div className="redes-sociales">
          <IconLinkedin />
          <IconFacebook />
          <IconTwitter />
        </div>

        <div className="creador">
          <span>Powered by</span>
          <img src={lofoFoonki} alt="imagen" />
        </div>

        <div className="derechos">
          
          <span>© 2021 FM. All rights reserved</span>
        </div>
      </div>
    </div>
  );
}
