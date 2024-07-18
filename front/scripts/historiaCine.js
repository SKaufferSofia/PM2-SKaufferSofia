const clickSagas = require("./historiaCine/sagaMovies");
const infoCards = require("./historiaCine/historiaCineCards");
const formCards = require("./historiaCine/formCards");
const axios = require("axios");

const Movies = async function () {
  try {
    const response = await axios.get("http://localhost:3000/movies");
    const moviesData = response.data;
    infoCards(moviesData);
    clickSagas(moviesData);
    formCards(moviesData);
  } catch (error) {
    console.error("Error detalles:", error);
  }
};

Movies();
