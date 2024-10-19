import prisma from "../../infrastructure/database/prisma.js";

export class CategoryDatabaseAdapter {
  async getCategoryById(categoryId) {
    return await prisma.category.findUnique({
      where: { id: categoryId },
      include: { homeworks: true },
    });
  }

  async createCategory(categoryData) {
    return await prisma.category.create({
      data: categoryData,
    });
  }

  async getAllCategories() {
    return await prisma.category.findMany({
      include: { homeworks: true },
    });
  }

  async updateCategory(categoryId, updateData) {
    return await prisma.category.update({
      where: { id: categoryId },
      data: updateData,
    });
  }

  async deleteCategory(categoryId) {
    return await prisma.category.delete({
      where: { id: categoryId },
    });
  }

  async getHomeworksByCategoryId(categoryId) {
    return await prisma.homework.findMany({
      where: { categoryId },
    });
  }
}
