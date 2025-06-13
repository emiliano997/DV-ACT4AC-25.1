import { Router } from "express";
import { validateId } from "../middlewares/validateId.js";
import { validateSchema } from "../middlewares/validateSchema.js";
import { productSchema } from "../schemas/product.schema.js";
import { ProductController } from "../controllers/product.controller.js";

export const productsRouter = Router();

// GET
productsRouter.get("/", ProductController.getAll);

productsRouter.get("/:id", validateId, ProductController.getById);

productsRouter.post(
  "/",
  validateSchema(productSchema),
  ProductController.create
);

// PUT
productsRouter.put("/:id", validateId, ProductController.update);

// DELETE
productsRouter.delete("/:id", validateId, ProductController.delete);
