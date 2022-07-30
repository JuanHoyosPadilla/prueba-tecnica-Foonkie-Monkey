import "./paginausuario.css";
import { useState, useEffect } from "react";
import { Usuario } from "../components/usuario/Usuario";
import { Popup } from "../components/popup/Popup";
export function UsuariosPagina() {
  const [users, setUser] = useState([]);
  const [activarPopup, setActivarPopup] = useState(false);
  const [datoPopup, setDatoPopup] = useState({});

  //funcion mostrar detalles
  const botonMostrarDetalles = (id) => {
    users.filter((dato) => dato.id === id).map((dato) => setDatoPopup(dato));
    setActivarPopup(!activarPopup);
  };

  const cerrarPopup = () => {
    setActivarPopup(!activarPopup);
  };

  useEffect(() => {
    fetch("https://reqres.in/api/users")
      .then((response) => response.json())
      .then((usuarios) => setUser(usuarios.data))
      .catch((error) => console.log(error));
  }, []);
  return (
    <div className="contenedor-usuarios">
      <div>
        {activarPopup ? (
          <Popup datoPopup={datoPopup} cerrarPopup={cerrarPopup} />
        ) : (
          ""
        )}
      </div>

      
    
      <div className="usuarios">
        {users.map((user) => (
          <Usuario
            key={user.id}
            botonMostrarDetalles={botonMostrarDetalles}
            user={user}
          />
        ))}
      </div>
    </div>
  );
}
