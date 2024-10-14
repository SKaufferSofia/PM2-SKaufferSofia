import styles from "./webs.module.css";
import { arrayWebs } from "./web";
import { Spinner } from "react-bootstrap";
const WebRecomendadasList = () => {
  if (!arrayWebs) {
    return (
      <p className="text-center">
        {" "}
        <Spinner animation="border" className="text-danger" />
      </p>
    );
  }

  return (
    <div className={styles.contenedorStreaming}>
      {arrayWebs.map((web) => (
        <div key={web.id} className={styles.imageContainer}>
          <img src={web.img} alt={web.name} className={styles.image} />
          <a href={web.url} target="_blank">
            <img
              src={web.imgHover}
              alt={web.name}
              className={styles.imageHover}
            />
          </a>
        </div>
      ))}
    </div>
  );
};

export default WebRecomendadasList;
