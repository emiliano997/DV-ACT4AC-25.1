import { Router } from "express";
import { validateId } from "../middlewares/validateId.js";
import { validateSchema } from "../middlewares/validateSchema.js";
import { productSchema } from "../schemas/product.schema.js";
import { ProductController } from "../controllers/product.controller.js";
import { authorization } from "../middlewares/authorization.js";
import { ROLE } from "../utils/constants.js";
import { authentication } from "../middlewares/authentication.js";

export const productsRouter = Router();

// GET
productsRouter.get("/", ProductController.getAll);

productsRouter.get(
  "/:id",
  authentication,
  authorization(ROLE.USER),
  validateId,
  ProductController.getById
);

productsRouter.post(
  "/",
  authentication,
  authorization(ROLE.ADMIN),
  validateSchema(productSchema),
  ProductController.create
);

// PUT
productsRouter.put("/:id", validateId, ProductController.update);

// DELETE
productsRouter.delete("/:id", validateId, ProductController.delete);
