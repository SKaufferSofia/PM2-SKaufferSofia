import styles from "./AllMovies.module.css";

const AllMovies = ({ movie: { title, poster, genre, director } }) => {
  return (
    <div className={styles.cardColections}>
      <h6>{title}</h6>
      <img src={poster} alt={title} className={styles.imageColections} />
      <div>
        <span> {genre.join(" | ")}</span>
      </div>
      <span>
        <strong>Director:</strong> {director}
      </span>
    </div>
  );
};

export default AllMovies;
