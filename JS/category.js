const categoryfilter = document.getElementById("categoryFilter");
const games = document.querySelectorAll(".games");

categoryfilter.addEventListener("change", filtrarCategorias);

function filtrarCategorias() {
  const categoriaSeleccionada = categoryfilter.value;
  games.forEach((movie) => {
    const categoria = movie.getAttribute("data-category");
    if (
      categoriaSeleccionada === "all" ||
      categoria === categoriaSeleccionada
    ) {
      movie.style.display = "block";
    } else {
      movie.style.display = "none";
    }
  });
}
