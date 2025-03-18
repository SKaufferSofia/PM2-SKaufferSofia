import { Nav } from "react-bootstrap";
import Logo from "../../../public/Logo.png";
import { Link } from "react-router-dom";

const NavbarComp = () => {
  return (
    <div>
      <header>
        <Link to="/">
          <img src={Logo} alt="Logo" className={{ height: "85px" }} />
        </Link>
        <Nav>
          <Nav.Item>
            <Nav.Link>
              <Link to="/">Home</Link>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link>
              <Link to="/colecciones">Colecciones</Link>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link>
              <Link to="/historiacine">Historia Cine</Link>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link>
              <Link to="/webs">Webs Recomendadas</Link>
            </Nav.Link>
          </Nav.Item>
          {/* <Nav.Item>
            <Nav.Link>
              <Link to="/agregarPelicula">Agregar Películas</Link>
            </Nav.Link>
          </Nav.Item> */}
        </Nav>
      </header>
    </div>
  );
};

export default NavbarComp;
