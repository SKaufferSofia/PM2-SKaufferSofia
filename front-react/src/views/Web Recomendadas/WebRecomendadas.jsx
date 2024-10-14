import WebRecomendadasList from "../../components/WebRecomendadas/WebRecomendadasList";

const WebRecomendadas = () => {
  return (
    <div>
      <p className="text-center">
        Estos son los sitios web mas conocidos, que se los conoces como{" "}
        <b style={{ color: "red" }}>plataformas de streaming</b>, donde podras
        ver algunas de las <b style={{ color: "red" }}>películas </b>que se
        encuentran en este sitio web y
        <b style={{ color: "red" }}> muchas otras más </b> .
      </p>
      <WebRecomendadasList />
    </div>
  );
};
export default WebRecomendadas;
