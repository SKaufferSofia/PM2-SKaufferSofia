import HistoriaCineList from "../../components/HistoriaCine/HistoriaCineList";
import SagaList from "../../components/SagaMovies/SagaList";
import useMovies from "../../hook/hook";

const HistoriaCine = () => {
  const { movies } = useMovies();

  return (
    <div>
      <h3 style={{ textAlign: "center" }}>Historia Cine</h3>

      <HistoriaCineList movies={movies} />
      <div style={{ marginTop: "50px" }}>
        <SagaList movies={movies} />
      </div> 
      {/* <p>
        {" "}
        En la sección{" "}
        <a href="/agregarPelicula">
          <b style={{ color: "red" }}>Agregar Película</b>
        </a>{" "}
        podrás añadir una película a tu gusto. Comparte con nosotros esas joyas
        del cine que te han dejado una impresión duradera y enriquece nuestra
        colección con tus recomendaciones personales.
      </p> */}
    </div>
  );
};

export default HistoriaCine;
