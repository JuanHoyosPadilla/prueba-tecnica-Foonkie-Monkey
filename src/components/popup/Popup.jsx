import './estilos.css';
export function Popup({cerrarPopup,datoPopup}){
    return <div className="contenedor-popup">
        <div className="popup">
            <div className="popup-header">
                <span onClick={cerrarPopup} >Cerrar</span>
            </div>
            <div className="popup-body">
                <img src={datoPopup.avatar} alt="imagen" />
                <div className='datos'>
                    <span className='nombre'>{datoPopup.first_name} {datoPopup.last_name}</span>
                    <span className='correo'>{datoPopup.email}</span>
                </div>
            </div>

        </div>

    </div>
}