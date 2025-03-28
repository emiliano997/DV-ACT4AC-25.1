// Eventos
const boton = document.getElementById("deleteText");

boton.addEventListener("click", (evento) => {
  console.log(evento);

  const seccion = document.querySelector("#main");

  seccion.innerHTML = "";
});
