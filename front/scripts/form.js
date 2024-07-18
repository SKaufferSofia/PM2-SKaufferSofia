const axios = require("axios");

const titleInput = document.getElementById("movieName");
const directorInput = document.getElementById("director");
const yearInput = document.getElementById("year");
const durationInput = document.getElementById("duration");
const genreInput = document.getElementById("genre");
const rateInput = document.getElementById("rate");
const imgUrlInput = document.getElementById("imgUrl");

const agregarPelicula = async (event) => {
  event.preventDefault();

  const title = titleInput.value.trim();
  const director = directorInput.value.trim();
  const year = yearInput.value.trim();
  const duration = durationInput.value.trim();
  const genre = genreInput.value
    .trim()
    .split(",")
    .map((g) => g.trim());
  const rate = rateInput.value.trim();
  const poster = imgUrlInput.value.trim();

  if (
    !title ||
    !director ||
    !year ||
    !duration ||
    !genre.length ||
    !rate ||
    !poster
  ) {
    return alert("Complete todos los campos");
  }

  const dataMovie = { title, year, director, duration, genre, rate, poster };

  try {
    await axios.post("http://localhost:3000/movies", dataMovie);
    alert("Se envió correctamente");
  } catch (error) {
    alert("Hubo un error al enviar la película. Inténtelo de nuevo.");
  }
};

const limpiarPelicula = () => {
  titleInput.value = "";
  directorInput.value = "";
  yearInput.value = "";
  durationInput.value = "";
  genreInput.value = "";
  rateInput.value = "";
  imgUrlInput.value = "";
};

const botonCrear = document.getElementById("boton-sumit");
botonCrear.addEventListener("click", agregarPelicula);

const botonLimpiar = document.getElementById("boton-clean");
botonLimpiar.addEventListener("click", limpiarPelicula);
