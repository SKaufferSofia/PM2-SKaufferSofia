import styles from "./MoviesList.module.css";

const MoviesList = ({
  movie: { title, poster, genre, director, year, duration, rate },
}) => {
  return (
    <div className={styles.tarjeta}>
      <img src={poster} alt={title} className={styles.imagen} />
      <div className={styles.informacion}>
        <div className={styles.info}>
          <p>{title}</p>
          <h1>
            <strong>⭐</strong>
            {rate}
          </h1>
          <div className={styles.info2}>
            <div>
              <span>
                {year}
                <span>|</span> {duration}
              </span>
            </div>
            <div>
              <span>{genre.join(" | ")}</span>
            </div>
            <span>
              <strong>Director:</strong> {director}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoviesList;
