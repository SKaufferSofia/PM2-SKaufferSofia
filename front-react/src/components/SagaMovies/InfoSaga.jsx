import styles from "./saga.module.css";

const InfoSaga = ({ movie: { title, poster } }) => {
  return (
    <div className={styles.tarjetaSaga}>
      <img src={poster} alt={title} className={styles.imagenSaga} />
      <h3 style={{ fontSize: "17px" }}>{title}</h3>
    </div>
  );
};

export default InfoSaga;
