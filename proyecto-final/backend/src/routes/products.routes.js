import { Router } from "express";

const products = [
  { id: 1, name: "Macbook Pro", price: 2500, category: "laptops" },
  { id: 2, name: "iPhone 14", price: 1200, category: "smartphones" },
  { id: 3, name: "iPad Pro", price: 800, category: "tablets" },
  { id: 4, name: "Apple Watch", price: 400, category: "smartwatches" },
  { id: 5, name: "AirPods Pro", price: 250, category: "audio" },
  { id: 6, name: "Apple TV", price: 150, category: "streaming" },
  { id: 7, name: "Magic Keyboard", price: 100, category: "accessories" },
  { id: 8, name: "Magic Mouse", price: 80, category: "accessories" },
  { id: 9, name: "HomePod Mini", price: 100, category: "audio" },
  { id: 10, name: "AirTag", price: 30, category: "accessories" },
];

const orderByOptions = ["name", "price"];
const categories = [
  "laptops",
  "smartphones",
  "tablets",
  "smartwatches",
  "audio",
  "streaming",
  "accessories",
];

export const productsRouter = Router();

// GET
productsRouter.get("/", (req, res) => {
  const { orderBy, category } = req.query;

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
});

productsRouter.get("/:id", (req, res) => {
  const { id } = req.params;

  if (isNaN(id)) {
    return res.status(400).json({
      error: "El ID debe ser un número",
    });
  }

  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return res.status(404).json({
      error: "Producto no encontrado",
    });
  }

  res.status(200).json(product);
});

// POST
productsRouter.post("/", (req, res) => {
  const { name, price, category } = req.body; // req.body -> Cuerpo de la petición

  // Validaciones
  if (!name || !price || !category) {
    return res.status(400).json({
      error: "Faltan datos. Debes enviar nombre, precio y categoría.",
    });
  }

  if (!categories.includes(category.toLowerCase())) {
    return res.status(400).json({
      error:
        "Categoría no válida. Las categorías disponibles son: " +
        categories.join(", "),
    });
  }

  if (isNaN(price)) {
    return res.status(400).json({
      error: "El precio debe ser un número",
    });
  }

  // Crear el nuevo producto
  const product = {
    id: products[products.length - 1].id + 1,
    name,
    price: Number(price),
    category: category.toLowerCase(),
  };

  products.push(product);

  res.status(201).json({
    message: "Producto creado correctamente",
    product,
  });
});

// PUT
productsRouter.put("/:id", (req, res) => {
  const { id } = req.params;
  const { name, price, category } = req.body;

  if (isNaN(id)) {
    return res.status(400).json({
      error: "El ID debe ser un número",
    });
  }

  if (!name || !price || !category) {
    return res.status(400).json({
      error: "Faltan datos. Debes enviar nombre, precio y categoría.",
    });
  }

  if (!categories.includes(category.toLowerCase())) {
    return res.status(400).json({
      error:
        "Categoría no válida. Las categorías disponibles son: " +
        categories.join(", "),
    });
  }

  if (isNaN(price)) {
    return res.status(400).json({
      error: "El precio debe ser un número",
    });
  }

  const productIndex = products.findIndex((p) => p.id === Number(id));

  if (productIndex === -1) {
    return res.status(404).json({
      error: "Producto no encontrado",
    });
  }

  products[productIndex] = {
    id: Number(id),
    name: name ? name : products[productIndex].name,
    price: price ? Number(price) : products[productIndex].price,
    category: category
      ? category.toLowerCase()
      : products[productIndex].category,
  };

  res.status(200).json({
    message: "Producto actualizado correctamente",
    product: products[productIndex],
  });
});

// DELETE
productsRouter.delete("/:id", (req, res) => {
  const { id } = req.params;

  if (isNaN(id)) {
    return res.status(400).json({
      error: "El ID debe ser un número",
    });
  }

  const productIndex = products.findIndex((p) => p.id === Number(id));

  if (productIndex === -1) {
    return res.status(404).json({
      error: "Producto no encontrado",
    });
  }

  products.splice(productIndex, 1);

  res.status(200).json({
    message: "Producto eliminado correctamente",
  });
});
