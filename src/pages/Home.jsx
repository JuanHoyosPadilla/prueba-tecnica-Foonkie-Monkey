//importacion de css
import "./home.css";
import { Secciondownload } from "../components/secciondownload/Secciondownload";
import { Primeraseccion } from "../components/primeraseccion/Primeraseccion";
import { Seccioncomentarios } from "../components/seccioncomentarios/Seccioncomentarios";
import { Seccioncuatro } from "../components/seccioncuatro/Seccioncuatro";
import { Seccioncinco } from "../components/seccioncinco/Seccioncinco";
export function Home() {
  return (
    <div className="contenedor">
      <Primeraseccion />
      <Secciondownload />
      <Seccioncomentarios />
      <Seccioncuatro />
      <Seccioncinco />
    </div>
  );
}
