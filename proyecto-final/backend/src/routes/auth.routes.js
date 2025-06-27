import { Router } from "express";
import { AuthController } from "../controllers/auth.controller.js";
import { userSchema } from "../schemas/user.schema.js";
import { validateSchema } from "../middlewares/validateSchema.js";

export const authRouter = Router();

authRouter.post("/login", AuthController.login);

authRouter.post(
  "/register",
  validateSchema(userSchema),
  AuthController.register
);
