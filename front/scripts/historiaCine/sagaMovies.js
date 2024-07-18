function moviesSaga(data, saga) {
  const filteredMovies = data.filter(
    (movie) => movie.details && movie.details.saga === saga
  );
  const moviesContainer = document.getElementById("movies-saga");
  moviesContainer.innerHTML = "";

  filteredMovies.forEach((movie) => {
    const movieElement = document.createElement("div");
    movieElement.classList.add("tarjeta-saga");

    movieElement.innerHTML = `
        <img src="${movie.poster}" alt="${movie.title}" class="imagen-saga">
        <h3 style="font-size: 17px;">${movie.title}</h3>
      `;

    moviesContainer.appendChild(movieElement);
  });
}

function clickSagas(data) {
  document
    .getElementById("starWars")
    .addEventListener("click", () => moviesSaga(data, "Star Wars"));
  document
    .getElementById("harryPotter")
    .addEventListener("click", () => moviesSaga(data, "Harry Potter"));
  document
    .getElementById("marvel")
    .addEventListener("click", () => moviesSaga(data, "Marvel"));
  document
    .getElementById("twilight")
    .addEventListener("click", () => moviesSaga(data, "Twilight"));
}

module.exports = clickSagas;
