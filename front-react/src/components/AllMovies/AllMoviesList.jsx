import AllMovie from "../AllMovies/AllMovies";
import styles from "./AllMovies.module.css";

const AllMovieList = ({ movies }) => {
  return (
    <div className={styles.container}>
      {movies.map((movie) => {
        return <AllMovie key={movie.id} movie={movie} />;
      })}
    </div>
  );
};

export default AllMovieList;
