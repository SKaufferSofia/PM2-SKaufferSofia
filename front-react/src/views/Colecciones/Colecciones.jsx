import styles from "./Colecciones.module.css";
import useMovies from "../../hook/hook";
import AllMovieList from "../../components/AllMovies/AllMoviesList";
import NavbarColection from "../../components/Navbar/NavbarColection";
import { Button, Spinner } from "react-bootstrap";

const Colecciones = () => {
  const { filteredMovies, setSearchTerm } = useMovies();

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  return (
    <div>
      <NavbarColection onSearch={handleSearch} />
      <div className={styles.container}>
        <h3>Colecciones de Películas</h3>
        <div className={styles.colecciones}>
          {filteredMovies.length === 0 ? (
            <p>
              {" "}
              <Spinner animation="border" className="text-danger" />
            </p>
          ) : (
            <AllMovieList movies={filteredMovies} />
          )}
        </div>

        {/* <Button
          className="btn btn-danger"
          href="/agregarPelicula"
          size="md"
          style={{ marginTop: "40px" }}
        >
          Agregar pelicula
        </Button> */}
        <Button
          className="btn btn-danger"
          href="/home"
          size="md"
          style={{ marginTop: "40px" }}
        >
          Volver a Inicio
        </Button>
      </div>
    </div>
  );
};

export default Colecciones;
