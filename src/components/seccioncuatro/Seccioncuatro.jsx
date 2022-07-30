import './estilos.css';
import imageTelefono from "../../assets/image/Group55.png";
import {Link} from 'react-router-dom'
export function Seccioncuatro() {
  return (
    <div className="seccion-numero-4">
      <div className="colum-imagenes">
        <div className="circulo"></div>
        <img src={imageTelefono} alt="image" />
        <div className='mobile'></div>
      </div>
      <div className="colum-titulos">
        <h2>Lorem ipsum.</h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti eum
          rerum reprehenderit dolor a nihil iusto labore?
        </p>
        <hr />
        <div className="btn">
          <button><Link className='link' to='/usuarios'>Download</Link></button>
        </div>
      </div>
    </div>
  );
}
