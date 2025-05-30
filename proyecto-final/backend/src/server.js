import express from "express";

// Creamos nuestra app de Express
const app = express();
const PORT = 5000;

app.get("/", (request, response) => {
  response.json({
    message: "¡Hola, mundo! Este es el backend de tu proyecto final",
  });
});

// Inicalizar la app
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
