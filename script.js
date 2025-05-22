

document.addEventListener("DOMContentLoaded", function () {
    const boton = document.getElementById("botup");

    // Mostrar el botón cuando el usuario baja
    window.onscroll = function () {
        if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
            boton.style.display = "block";
        } else {
            boton.style.display = "none";
        }
    };

    // Volver arriba con scroll suave
    boton.addEventListener("click", function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
});


