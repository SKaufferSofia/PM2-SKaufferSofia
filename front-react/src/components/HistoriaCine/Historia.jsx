import styles from "./historiaMovies.module.css";

const Historia = ({ movie: { title, poster } }) => {
  return (
    <div className={styles.tarjeta}>
      <img src={poster} alt={title} className={styles.imagen} />
    </div>
  );
};

export default Historia;
