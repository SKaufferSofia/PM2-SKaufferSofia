import { Spinner } from "react-bootstrap";
import MoviesList from "./MoviesHome";
import styles from "./MoviesList.module.css";

// eslint-disable-next-line react/prop-types
const MoviesListHome = ({ movies }) => {
  // eslint-disable-next-line react/prop-types
  if (!movies || movies.length < 18) {
    return (
      <p>
        <Spinner animation="border" className="text-danger" />
      </p>
    );
  }

  let moviesArray = [
    movies[0],
    movies[1],
    movies[2],
    movies[20],
    movies[21],
    movies[22],
  ];

  return (
    <div className={styles.contenedor}>
      {moviesArray.map((movie) => {
        return <MoviesList key={movie.id} movie={movie} />;
      })}
    </div>
  );
};

export default MoviesListHome;
