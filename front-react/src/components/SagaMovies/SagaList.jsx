import { useState } from "react";
import styles from "./saga.module.css";
import InfoSaga from "./InfoSaga";
import { Spinner } from "react-bootstrap";

// eslint-disable-next-line react/prop-types
const SagaList = ({ movies }) => {
  // eslint-disable-next-line react/prop-types
  if (!movies || movies.length < 18) {
    return (
      <p className="text-center">
        {" "}
        <Spinner animation="border" className="text-danger" />
      </p>
    );
  }

  // eslint-disable-next-line no-unused-vars, react-hooks/rules-of-hooks
  const [saga, setSaga] = useState([
    {
      id: 1,
      name: "Star Wars",
      img: "./Sagas/Logos-SW.jpg",
      imgHover: "./Sagas/Logos-SW-Hover.jpg",
    },
    {
      id: 2,
      name: "Harry Potter",
      img: "./Sagas/Logos-HP.jpg",
      imgHover: "./Sagas/Logos-HP-Hover.jpg",
    },
    {
      id: 3,
      name: "Marvel",
      img: "./Sagas/Logos-marvel.jpg",
      imgHover: "./Sagas/Logos-marvel-Hover.jpg",
    },
    {
      id: 4,
      name: "Twilight",
      img: "./Sagas/Logos-TW.jpg",
      imgHover: "./Sagas/Logos-TW-Hover.jpg",
    },
  ]);

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [activeSaga, setActiveSaga] = useState(null);

  const filteredMovies = activeSaga
    ? // eslint-disable-next-line react/prop-types
      movies.filter(
        (movie) => movie.details && movie.details.saga === activeSaga.name
      )
    : [];

  return (
    <div>
      <p>
        En esta sección encontrarás más películas, incluyendo emocionantes sagas
        como Star Wars y Marvel. Sumérgete en épicas aventuras galácticas,
        historias de superhéroes y mucho más.Nuestra colección está llena de
        clásicos y estrenos que te mantendrán al borde de tu asiento.
      </p>
      <p style={{ textAlign: "center" }}>HAGA CLIC EN LA IMAGEN</p>
      <div className={styles.contenedorStreaming}>
        {saga.map((saga) => (
          <div
            key={saga.id}
            className={styles.imageContainer}
            onClick={() => setActiveSaga(saga)}
          >
            <img className={styles.image} src={saga.img} alt={saga.name} />
            <img
              className={styles.imageHover}
              src={saga.imgHover}
              alt={saga.name}
            />
          </div>
        ))}
        <div className={styles.contenedorSaga}>
          {filteredMovies.map((movie) => (
            <InfoSaga key={movie.id} movie={movie} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SagaList;
