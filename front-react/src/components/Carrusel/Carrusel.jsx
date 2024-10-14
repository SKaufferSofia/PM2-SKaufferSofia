import styles from "./Carrusel.module.css";
import { Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";
import CarruselHistoriaCine from "./image/el padrino banner.jpg";
import CarruselSagas from "./image/sagas banner.jpg";
import CarruselWeb from "./image/web banner.jpg";

const Carrusel = () => {
  return (
    <Carousel className={styles.slide}>
      <Carousel.Item>
        <Link to="/historiacine">
          <img
            className={`${styles.carruselImagen}`}
            src={CarruselHistoriaCine}
            alt="First slide"
          />
        </Link>
      </Carousel.Item>
      <Carousel.Item>
        <Link to="/historiacine">
          <img
            className={`${styles.carruselImagen}`}
            src={CarruselSagas}
            alt="Second slide"
          />
        </Link>
      </Carousel.Item>
      <Carousel.Item>
        <Link to="/webs">
          <img
            className={`${styles.carruselImagen}`}
            src={CarruselWeb}
            alt="Third slide"
          />
        </Link>
      </Carousel.Item>
    </Carousel>
  );
};

export default Carrusel;
