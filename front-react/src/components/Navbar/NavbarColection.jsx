import { Nav, InputGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import Logo from "../../../public/Logo.png";
import { useState } from "react";

const NavbarColection = ({ onSearch }) => {
  const handleSearch = (event) => {
    const searchTerm = event.target.value.trim().toLowerCase();
    onSearch(searchTerm);
  };

  return (
    <div>
      <header>
        <img src={Logo} alt="Logo" className={{ height: "85px" }} />
        <Nav>
          <Nav.Item>
            <Nav.Link>
              <Link to="/home">Home</Link>
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
          <Nav.Item>
            <Nav.Link>
              <Link to="/agregarPelicula">Agregar Películas</Link>
            </Nav.Link>
          </Nav.Item>
        </Nav>
        <InputGroup className="input">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
            onChange={handleSearch}
          />
        </InputGroup>
      </header>
    </div>
  );
};

export default NavbarColection;
