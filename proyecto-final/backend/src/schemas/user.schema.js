import Joi from "joi";

export const userSchema = Joi.object({
  id: Joi.number().integer().optional(),
  name: Joi.string().min(3).max(50).required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
  role: Joi.string().valid("user", "admin").default("user").optional(),
});
