import './estilos.css';
import image from "../../assets/image/021.png";
import imageuser from "../..//assets/image/pp.png";
export function Seccioncomentarios() {
  return (
    <div className="seccion-comentarios">
      <img src={image} alt="image" />
      <div className="contenedor-comentarios">
        <div className="column-1-comentario">
          <div className="comentarios caja-1">
            <div className="usuario">
              <span>Karen - New york</span>
              <img className='img' src={imageuser} alt="imagen" />
            </div>
            <article>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima
              fugiat fuga modi temporibus.
            </article>
          </div>
          <div className="comentarios caja-2">
            <div className="usuario">
              <span>Karen - New york</span>
              <img src={imageuser} alt="imagen" />
            </div>
            <article>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima
              fugiat fuga modi temporibus.
            </article>
          </div>
        </div>
        <div className="column-2-comentario">
          <div className="comentarios caja1">
            <div className="usuario">
              <img src={imageuser} alt="imagen" />
              <span>Karen - New york</span>
            </div>
            <article>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima
              fugiat fuga modi temporibus.
            </article>
          </div>
          <div className="comentarios caja2">
            <div className="usuario">
              <img src={imageuser} alt="imagen" />
              <span>Karen - New york</span>
            </div>
            <article>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima
              fugiat fuga modi temporibus.
            </article>
          </div>
        </div>
      </div>
    </div>
  );
}
