import express from "express";
import { productsRouter } from "./routes/products.routes.js";
import morgan from "morgan";

// Creamos nuestra app de Express
const app = express();
const PORT = 5000;

// Configuración de Express
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (request, response) => {
  response.json({
    message: "¡Hola, mundo! Este es el backend de tu proyecto final",
  });
});

// Router de productos
app.use("/api/products", productsRouter);

// Inicializar la app
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
