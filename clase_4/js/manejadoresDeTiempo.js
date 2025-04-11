// Manejadores de tiempo
// setTimeout
function saludo() {
  alert("Bienvenido a la clase de JavaScript");
}

// setTimeout(saludo, 1000);

let contador = 0;

function aumentarContador() {
  contador++;
  console.log(contador);
}

// const intervalo = setInterval(aumentarContador, 1000);

// setTimeout(() => {
//   clearInterval(intervalo);
// }, 5000);

let segundos = 0;
let minutos = 0;

function reloj() {
  segundos++;
  if (segundos === 60) {
    segundos = 0;
    minutos++;
  }
  console.log(
    `${minutos < 10 ? "0" + minutos : minutos}:${
      segundos < 10 ? "0" + segundos : segundos
    }`
  );
}

// setInterval(reloj, 1000);
