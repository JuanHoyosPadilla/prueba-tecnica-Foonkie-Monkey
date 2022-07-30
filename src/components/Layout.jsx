import "./layout.css";
import {useState} from 'react'
import { Navbaricon } from "./Navbaricon";
import { Navegacion } from "./navegacion/Navegacion";
import {Popupmodanav} from './popumodal/Popupmodanav';

export function Layout({ children }) {
  const [activenav, setActiveNav] = useState(false)
  
  const cerrarNav = () => {
    setActiveNav(!activenav)
  }

  return (
    <>
      <div>
        <Navegacion />
      </div>
      <main>
        {
          activenav ? <Popupmodanav cerrarNav={cerrarNav} /> : ''
        }
        <div className="icon-navbar" onClick={cerrarNav}>
          <Navbaricon />
        </div>
        {children}
      </main>
    </>
  );
}
