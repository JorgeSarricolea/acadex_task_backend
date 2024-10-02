import prisma from "../../infrastructure/database/prisma.js";

export class UserDatabaseAdapter {
  async createUser(userData) {
    return await prisma.user.create({
      data: userData,
    });
  }

  async getUserByEmail(email) {
    return await prisma.user.findUnique({
      where: { email },
    });
  }

  async updateUser(userId, updateData) {
    return await prisma.user.update({
      where: { id: userId },
      data: updateData,
    });
  }

  async deleteUser(userId) {
    return await prisma.user.delete({
      where: { id: userId },
    });
  }

  async getAllUsers() {
    return await prisma.user.findMany();
  }
}
