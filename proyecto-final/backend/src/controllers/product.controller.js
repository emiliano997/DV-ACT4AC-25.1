import { categories } from "../schemas/product.schema.js";
import { ProductService } from "../services/product.service.js";

const orderByOptions = ["name", "price"];

export class ProductController {
  static async getAll(req, res) {
    const { orderBy, category } = req.query;

    const products = await ProductService.getAll();

    if (orderBy && orderByOptions.includes(orderBy.toLowerCase())) {
      products.sort((a, b) => {
        if (orderBy.toLowerCase() === "name") {
          return a.name.localeCompare(b.name);
        } else if (orderBy.toLowerCase() === "price") {
          return a.price - b.price;
        }
      });
    }

    if (category && categories.includes(category.toLowerCase())) {
      return res
        .status(200)
        .json(
          products.filter(
            (product) => product.category === category.toLowerCase()
          )
        );
    } else if (category) {
      return res.status(400).json({
        error:
          "Categoría no válida. Las categorías disponibles son: " +
          categories.join(", "),
      });
    }

    res.status(200).json(products);
  }

  static async getById(req, res) {
    const { id } = req.params;

    const product = await ProductService.getById({ id });

    if (!product) {
      return res.status(404).json({
        error: "Producto no encontrado",
      });
    }

    res.status(200).json(product);
  }

  static async create(req, res) {
    try {
      console.log(req.body);

      const product = await ProductService.create({
        product: {
          ...req.body,
          status: req.body.status || "available",
        },
      });
      res.status(201).json({
        message: "Producto creado correctamente",
        product,
      });
    } catch (error) {
      res.status(500).json({
        error: "Error al crear el producto",
        details: error.message,
      });
    }
  }

  static async update(req, res) {
    const { id } = req.params;

    const productData = req.body;
    const product = await ProductService.getById({ id });

    if (!product) {
      return res.status(404).json({
        error: "Producto no encontrado",
      });
    }

    try {
      const updatedProduct = await ProductService.update({
        id,
        product: productData,
      });
      res.status(200).json({
        message: "Producto actualizado correctamente",
        product: updatedProduct,
      });
    } catch (error) {
      res.status(500).json({
        error: "Error al actualizar el producto",
        details: error.message,
      });
    }
  }

  static async delete(req, res) {
    const { id } = req.params;

    const product = await ProductService.getById({ id });

    if (!product) {
      return res.status(404).json({
        error: "Producto no encontrado",
      });
    }

    try {
      await ProductService.delete({ id });
      res.status(200).json({
        message: "Producto eliminado correctamente",
        product,
      });
    } catch (error) {
      res.status(500).json({
        error: "Error al eliminar el producto",
        details: error.message,
      });
    }
  }
}
