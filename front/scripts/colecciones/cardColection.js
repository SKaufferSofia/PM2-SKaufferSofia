const colecciones = document.getElementById("container-colections");

function colectionCards(data) {
  colecciones.innerHTML = "";
  data.map((pelicula) => {
    const tarjeta = document.createElement("div");
    tarjeta.classList.add("card-colection");

    tarjeta.innerHTML = `
          
        <h6>${pelicula.title}</h6>
        <img
          src="${pelicula.poster}"
          alt="${pelicula.title}"
          class="image-colection"
        />
        <div>
          <span> ${pelicula.genre.join(" | ")}</span>
        </div>
        <span><strong>Director:</strong> ${pelicula.director} </span>
          `;

    colecciones.appendChild(tarjeta);
  });
}

module.exports = colectionCards;
