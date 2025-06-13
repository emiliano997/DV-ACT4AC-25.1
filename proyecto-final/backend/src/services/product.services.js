import { prisma } from "../providers/prisma.provider.js";

export class ProductService {
  static getAll() {
    return prisma.product.findMany({});
  }

  static getById({ id }) {
    return prisma.product.findUnique({
      where: { id },
    });
  }

  static create({ product }) {
    return prisma.product.create({
      data: product,
    });
  }

  static update({ id, product }) {
    return prisma.product.update({
      where: { id },
      data: product,
    });
  }

  static delete({ id }) {
    return prisma.product.delete({
      where: { id },
    });
  }
}

// export const productService = new ProductService();
