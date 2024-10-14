import styles from "./Home.module.css";
import Carrusel from "../../components/Carrusel/Carrusel";
import useMovies from "../../hook/hook";
import MoviesListHome from "../../components/MoviesHome/MoviesListHome";

const Home = () => {
  const { movies } = useMovies();
  return (
    <div className={styles.home}>
      <Carrusel />
      <div className={styles.contenedorPrincipal}>
        <h4>PELÍCULAS DESTACADAS</h4>
        <div>
          <MoviesListHome movies={movies} />
        </div>
      </div>
    </div>
  );
};

export default Home;
