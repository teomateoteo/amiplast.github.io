document.addEventListener("DOMContentLoaded", function () {
  const toggleButton = document.getElementById('toggleDarkMode');

  // Cargar preferencia desde localStorage
  document.addEventListener("DOMContentLoaded", () => {
    if (localStorage.getItem("modoOscuro") === "true") {
      document.body.classList.add("dark-mode");
    }
  });

  // Toggle y guardar preferencia
  toggleButton.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    localStorage.setItem("modoOscuro", document.body.classList.contains("dark-mode"));
  });
}
