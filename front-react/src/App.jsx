import Home from "./views/Home/Home";
import NavbarComp from "./components/Navbar/Navbar";
import Colecciones from "./views/Colecciones/Colecciones";
import HistoriaCine from "./views/Historia Cine/HistoriaCine";
import WebRecomendadas from "./views/Web Recomendadas/WebRecomendadas";
import AgregarPelicula from "./views/Agregar Peliculas/AgregarPelicula";
import { Route, Routes } from "react-router-dom";
import { useLocation } from "react-router-dom";

function App() {
  const location = useLocation();
  return (
    <div>
      {location.pathname !== "/colecciones" && <NavbarComp />}
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/colecciones" element={<Colecciones />} />
        <Route path="/historiacine" element={<HistoriaCine />} />
        <Route path="/webs" element={<WebRecomendadas />} />
        <Route path="/agregarPelicula" element={<AgregarPelicula />} />
      </Routes>
    </div>
  );
}

export default App;
