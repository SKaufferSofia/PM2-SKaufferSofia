const filterInputs = require("./colecciones/filter");
const colectionCards = require("./colecciones/cardColection");
const axios = require("axios");

const colection = async function () {
  try {
    const response = await axios.get("http://localhost:3000/movies");
    const moviesData = response.data;
    filterInputs(moviesData);
    colectionCards(moviesData);
  } catch (error) {
    console.error("Error index:", error);
  }
};

colection();
