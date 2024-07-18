const getMovies = document.getElementById("AllMovies");

function infoCards(data) {
  let info = [
    data[8],
    data[9],
    data[10],
    data[11],
    data[12],
    data[13],
    data[14],
  ];
  const movies = document.createElement("div");
  movies.classList.add("contenedor-movies");
  info.map((pelicula) => {
    const tarjeta = document.createElement("div");
    tarjeta.classList.add("tarjeta");

    tarjeta.innerHTML = `
    <img src="${pelicula.poster}" alt="${pelicula.title}" class="imagen">
    `;

    // Añadir event listener a cada tarjeta
    tarjeta.addEventListener("click", () => {
      updateInfoContainer(pelicula);
    });

    movies.appendChild(tarjeta);
  });
  getMovies.appendChild(movies);
}

function updateInfoContainer(pelicula) {
  const infoContainer = document.getElementById("info-container");
  infoContainer.innerHTML = `
    <div class="contenedor-info">
      <img src="${pelicula.details.posterInfo}" alt="${
    pelicula.title
  }" class="imagen-info">
      <div class="puntuaciones">
        <h1 class="puntuacion">⭐${pelicula.rate}</h1>
        <h1 class="premios">🏆${
          pelicula.details.oscar
        } <span>Óscars</span> </h1>
      </div>
      <div class="info-general">
        <h3 class="titulo">${pelicula.title}</h3>
        <p class="descripcion">${pelicula.details.description}</p>
        <div class="info-pelicula">
          <div class="anio-duracion">
            <span>${pelicula.year} | ${pelicula.duration}</span>
          </div>
          <div class="generos">
            <span>${pelicula.genre.join(" | ")}</span>
          </div>
          <span class="director">Director: ${pelicula.director}</span>
        </div>
        <p>Disponible en la plataforma de <a href="../pages/webs.html"><b class="plataforma" style="color: red;">
        ${pelicula.details.streaming}
          </b></a></p>
      </div>
    </div>
  `;
}

module.exports = infoCards;
