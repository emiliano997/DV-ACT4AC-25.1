import express from "express";
import morgan from "morgan";
import cors from "cors";

import { authRouter } from "./routes/auth.routes.js";
import { productsRouter } from "./routes/products.routes.js";

// Creamos nuestra app de Express
const app = express();
const PORT = 5000;

// Configuración de Express
app.use(cors());
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
app.use("/api/auth", authRouter);

// Inicializar la app
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
