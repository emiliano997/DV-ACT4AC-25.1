// Variables
// let -> Sirve para crear variables que pueden ser reasignadas
let nombre = "Emiliano";
let edad = 28;
let esSoltero = true;
esSoltero = false; // ✅

// const -> Sirve para crear variables que no pueden ser reasignadas
const peso = 65;
// peso = 80; // ❌

// Funciones nativas
// prompt -> Muestra un mensaje y espera a que el usuario ingrese un valor
// nombre = prompt("Ingrese su nuevo nombre");

// alert -> Muestra un mensaje en una ventana emergente
// alert("Bienvenido " + nombre);

// confirm -> Muestra un mensaje y espera a que el usuario confirme o cancele
// const confirmacion = confirm("¿Está seguro que desea continuar?");

// console.log -> Muestra un mensaje en la consola
// console.log(confirmacion);

// let num1 = parseInt(prompt("Ingrese el primer numero"));
// let num2 = Number(prompt("Ingrese el segundo numero"));
// let resultado = num1 + num2;
// alert("Resultado: " + resultado);

// Condicionales
// if
// if (resultado > 10) {
//   console.log("El resultado es mayor a 10");
// } else if (resultado === 10) {
//   console.log("El resultado es igual a 10");
// } else {
//   console.log("El resultado es menor a 10");
// }

// switch
// El scope está delimitado por las llaves {}
const mesActual = 3;
switch (mesActual) {
  case (1, 2, 3): {
    // var estacion = "Invierno"; // ❌
    let estacion = "Verano";
    console.log("Es verano");
    break;
  }
  case (4, 5, 6): {
    let estacion = "Otoño";
    console.log("Es otoño");
    break;
  }
}

// Bucles
// for -> Se ejecuta una cantidad de veces determinada
for (let i = 0; i < 5; i++) {
  // console.log(i);
}

// while -> Se ejecuta siempre y cuando la condición sea verdadera
let flag = 0;
while (flag < 5) {
  // console.log(flag);
  flag++;
}

// do-while -> Se ejecuta al menos una vez y luego se ejecuta siempre y cuando la condición sea verdadera
do {
  // console.log(flag);
  flag++;
} while (flag < 5);

console.log(sumar(2, 5));

// Funciones
// Funcion tradicional
// - Si se puede usar el this
// - Tiene return explicito
// - Se aplica hoisting
/**
 *
 * @param { number } a
 * @param { number} b
 * @returns number
 */
function sumar(a, b) {
  return a + b;
}

// Funcion flecha
// - Return implicito
// - No puede usarse el this
// - No se aplica hoisting
const multiplicacion = (a, b) => a * b;

// Arrays
const datos = ["Emiliano", 28, true];

const nombres = ["Emiliano", "Juan Perez", "Pedro", "Maria", "Juan Lopez"];

// Métodos de array
// forEach -> Recorre el array
nombres.forEach((nombre) => {
  console.log(nombre);
});

// map -> Devuelve un nuevo array aplicando una función a cada elemento
const nombresMayuscula = nombres.map((nombre) => nombre.toUpperCase());
console.log(nombresMayuscula);
console.log("Original", nombres);

// filter -> Devuelve un nuevo array con los elementos que cumplan con la condición
const nombresSinA = nombres.filter((nombre) => !nombre.includes("a"));
console.log(nombresSinA);

// find -> Devuelve el primer elemento que cumpla con la condición
const nombreJuan = nombres.find((nombre) => nombre.includes("Juan"));
console.log(nombreJuan);
