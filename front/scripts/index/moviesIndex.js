const contenedorIndex = document.getElementById("movies-index");

function indexCards(data) {
  let index = [data[0], data[1], data[2], data[15], data[16], data[17]];
  index.map((pelicula) => {
    const tarjeta = document.createElement("div");
    tarjeta.classList.add("tarjeta");

    tarjeta.innerHTML = `
    <img
    src="${pelicula.poster}"
    alt="${pelicula.title}"
    class="imagen" />
     <div class="informacion">
        <div class="info">
          <p>${pelicula.title}</p>
          <h1><strong>⭐</strong>${pelicula.rate}</h1>
         <div class="info2">
          <div>
            <span>${pelicula.year}<span>|</span> ${pelicula.duration}</span>
          </div>
          <div>
            <span> ${pelicula.genre.join(" | ")}</span>
          </div>
          <span><strong>Director:</strong> ${pelicula.director}</span>
         </div>
        </div>
     </div>
    `;

    contenedorIndex.appendChild(tarjeta);
  });
}

module.exports = indexCards;
