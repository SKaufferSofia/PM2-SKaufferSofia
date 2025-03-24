import { useState } from "react";
import Historia from "./Historia";
import InfoHistoria from "./InfoHistoria";
import styles from "./historiaMovies.module.css";
import { Spinner } from "react-bootstrap";

const HistoriaCineList = ({ movies }) => {
  const [activeMovie, setActiveMovie] = useState(movies[13]);
  if (!movies || movies.length < 18) {
    return (
      <p className="text-center">
        {" "}
        <Spinner animation="border" className="text-danger" />
      </p>
    );
  }


  const moviesArray = [
    movies[13],
    movies[3],
    movies[5],
    movies[11],
    movies[19],
    movies[23],
    movies[16],
  ];
  console.log(moviesArray);
  

  return (
    <div>
      <p>
        El cine, como forma de arte y entretenimiento, ha producido obras que
        han dejado una huella indeleble en la cultura popular. Películas que
        exploran la condición humana, como el amor, la tragedia y la redención,
        han capturado la imaginación de audiencias en todo el mundo. Desde
        dramas épicos hasta comedias conmovedoras, el cine ha ofrecido una
        ventana a diferentes épocas, culturas y experiencias.
      </p>
      <p style={{ textAlign: "center" }}>HAGA CLIC EN LA IMAGEN</p>
      <div className={styles.contenedorMovies}>
        {moviesArray.map((movie) => (
          <div key={movie.id} onClick={() => setActiveMovie(movie)} >
            <Historia movie={movie} />
          </div>
        ))}
      </div>
  {activeMovie && <InfoHistoria movie={activeMovie} />} 
    </div>
  );
};

export default HistoriaCineList;
