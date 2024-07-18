const indexCards = require("./index/moviesIndex");
const axios = require("axios");

const index = async function () {
  try {
    const response = await axios.get("http://localhost:3000/movies");
    const moviesData = response.data;
    indexCards(moviesData);
  } catch (error) {
    console.error("Error index:", error);
  }
};

index();
