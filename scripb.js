
document.addEventListener("DOMContentLoaded", () => {
  const botones = document.querySelectorAll(".acordeon-titulo");

  botones.forEach(boton => {
    boton.addEventListener("click", () => {
      // Alternar clase "activo"
      boton.classList.toggle("activo");

      // Alternar visibilidad del contenido
      const contenido = boton.nextElementSibling;
      contenido.style.display = contenido.style.display === "block" ? "none" : "block";

      // Cambiar flecha
      const flecha = boton.querySelector(".flecha");
      flecha.textContent = boton.classList.contains("activo") ? "▼" : "▶";
    });
  });
});