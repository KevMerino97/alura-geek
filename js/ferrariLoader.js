window.addEventListener("load", function () {
  const loader = document.querySelector(".loader");
  const content = document.querySelector("body");

  this.setTimeout(function () {
    // Aplica la clase fade-out para que se desvanezca el loader
    loader.classList.add("fade-out");

    // Asegura que el contenido del body sea visible después de la animación
    content.style.overflow = "visible";

    // Después de 0.5s, ocultamos el loader completamente
    setTimeout(function () {
      loader.style.display = "none"; // Ocultamos el loader después de la animación
    }, 500); // Esperamos que la transición de fade-out dure 0.5s
  }, 1500);
});
