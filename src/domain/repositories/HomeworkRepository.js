import { ErrorFactory } from "../../application/services/ErrorFactory.js";

export default class HomeworkRepository {
  async getHomeworkById(homeworkId) {
    throw ErrorFactory.createError("NotImplemented", {
      methodName: "getHomeworkById",
    });
  }

  async getAllHomeworks() {
    throw ErrorFactory.createError("NotImplemented", {
      methodName: "getAllHomeworks",
    });
  }

  async createHomework(homeworkData) {
    throw ErrorFactory.createError("NotImplemented", {
      methodName: "createHomework",
    });
  }

  async updateHomework(homeworkId, updateData) {
    throw ErrorFactory.createError("NotImplemented", {
      methodName: "updateHomework",
    });
  }

  async deleteHomework(homeworkId) {
    throw ErrorFactory.createError("NotImplemented", {
      methodName: "deleteHomework",
    });
  }

  async getHomeworksByUserId(userId) {
    throw ErrorFactory.createError("NotImplemented", {
      methodName: "getHomeworksByUserId",
    });
  }
}
