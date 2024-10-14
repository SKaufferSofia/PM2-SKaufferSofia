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
    </div>
  );
};

export default HistoriaCine;
