import { prisma } from "../providers/prisma.provider.js";

export class UserService {
  static async createUser({ user }) {
    return prisma.user.create({
      data: user,
    });
  }

  static async getUserByEmail({ email }) {
    return prisma.user.findUnique({
      where: { email },
    });
  }
}
