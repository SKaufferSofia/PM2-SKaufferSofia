import styles from "./historiaMovies.module.css";
import { Link } from "react-router-dom";

const InfoHistoria = ({
  movie: { title, director, year, genre, rate, duration, details },
}) => {
  const { oscar, streaming, description, posterInfo } = details;

  return (
    <div className={styles.contenedorInfo}>
      <img src={posterInfo} alt={title} className={styles.imagenInfo} />
      <div className={styles.puntuaciones}>
        <h1>⭐{rate}</h1>
        <h1>
          🏆{oscar} <span>Óscars</span>{" "}
        </h1>
      </div>
      <div className={styles.infoGeneral}>
        <h3>{title}</h3>
        <p>{description}</p>
        <div className={styles.infoPelicula}>
          <div>
            <span>
              {year} | {duration}
            </span>
          </div>
          <div>
            <span>{genre.join(" | ")}</span>
          </div>
          <span>Director: {director}</span>
        </div>
        <p>
          Disponible en la plataforma de{" "}
          <Link to="/webs">
            <b className={styles.plataforma}> {streaming}</b>
          </Link>{" "}
        </p>
      </div>
    </div>
  );
};

export default InfoHistoria;
