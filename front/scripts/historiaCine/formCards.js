const contenedor = document.getElementById("conteinerCards");

function formCards(data) {
  contenedor.innerHTML = "";
  const pelicula = data[data.length - 1];
  const tarjeta = document.createElement("div");
  tarjeta.classList.add("tarjeta");

  tarjeta.innerHTML = `
    <img src="${pelicula.poster}" alt="${pelicula.title}" class="imagen">
    <div class="informacion">
      <div class="info"> 
        <h2>${pelicula.title}</h2>
        <h4>${pelicula.rate}</h4>
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

  contenedor.appendChild(tarjeta);
}

module.exports = formCards;
