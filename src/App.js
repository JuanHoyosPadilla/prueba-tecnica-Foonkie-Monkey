import "./App.css";
//Importamos react-router-dom
import { BrowserRouter, Routes, Route } from "react-router-dom";

//Importamos las paginas
import { Home } from "./pages/Home";
import { UsuariosPagina } from "./pages/UsuariosPagina";

//importacion de Layout
import { Layout } from "./components/Layout";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/usuarios" element={<UsuariosPagina />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
