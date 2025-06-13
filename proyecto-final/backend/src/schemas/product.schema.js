import Joi from "joi";

export const categories = [
  "laptops",
  "smartphones",
  "tablets",
  "smartwatches",
  "audio",
  "streaming",
  "accessories",
];

export const productSchema = Joi.object({
  id: Joi.number().integer().optional(),
  name: Joi.string().min(3).max(50).required(),
  description: Joi.string().min(10).required(),
  price: Joi.number().positive().required(),
  stock: Joi.number().integer().min(0).required(),
  category: Joi.string()
    .valid(...categories)
    .required(),
  image: Joi.string().uri().required(),
  status: Joi.string()
    .valid("available", "unavailable")
    .default("available")
    .optional(),
});
