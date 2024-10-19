import prisma from "../../infrastructure/database/prisma.js";

export class HomeworkDatabaseAdapter {
  async getHomeworkById(homeworkId) {
    return await prisma.homework.findUnique({
      where: { id: homeworkId },
      include: { user: true, category: true },
    });
  }

  async createHomework(homeworkData) {
    return await prisma.homework.create({
      data: homeworkData,
    });
  }

  async getAllHomeworks() {
    return await prisma.homework.findMany({
      include: { user: true, category: true },
    });
  }

  async updateHomework(homeworkId, updateData) {
    return await prisma.homework.update({
      where: { id: homeworkId },
      data: updateData,
    });
  }

  async deleteHomework(homeworkId) {
    return await prisma.homework.delete({
      where: { id: homeworkId },
    });
  }

  async getHomeworksByUserId(userId) {
    return await prisma.homework.findMany({
      where: { userId },
      include: { category: true },
    });
  }
}
