import "./estilos.css";
export function Usuario({user,botonMostrarDetalles}) {
  return (
    <div className="card-usuario" onClick={() => botonMostrarDetalles(user.id)} >
      <img src={user.avatar} alt="imagen" />
      <span>{user.first_name}</span>
    </div>
  );
}
