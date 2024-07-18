const colectionCards = require("./cardColection");

function filterInputs(data) {
  const movieSearchInput = document.getElementById("movieTitle");
  movieSearchInput.addEventListener("input", (event) => {
    const searchTerm = event.target.value.trim().toLowerCase();
    if (searchTerm !== "") {
      const filteredMovies = data.filter((pelicula) => {
        return pelicula.title.toLowerCase().includes(searchTerm);
      });
      colectionCards(filteredMovies);
    } else {
      colectionCards(data);
    }
  });
}

module.exports = filterInputs;
