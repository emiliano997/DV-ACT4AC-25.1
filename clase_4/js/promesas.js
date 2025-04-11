// Promesas

function sumar(a, b) {
  return new Promise((resolve, reject) => {
    if (a <= 0 || b <= 0) {
      return reject("Los números deben ser mayores a 0");
    }

    // Simulamos una operación asíncrona
    setTimeout(() => {
      const resultado = a + b;
      resolve(resultado);
    }, 5000);
  });
}

// const resultado = sumar(5, 10);
// console.log(resultado);

// then y catch
// sumar(0, 0)
//   .then((resultado) => {
//     console.log(`El resultado es: ${resultado}`);
//   })
//   .catch((error) => {
//     console.log(`Error: ${error}`);
//   })
//   .finally(() => {
//     console.log("Operación finalizada");
//   });

// Async await
// const operaciones = async () => {}
async function operaciones() {
  try {
    const resultado = await sumar(0, 10);
    console.log(`El resultado es: ${resultado}`);
  } catch (error) {
    console.log(`Error: ${error}`);
  } finally {
    console.log("Operación finalizada");
  }
}

operaciones();
