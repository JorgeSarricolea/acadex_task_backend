import HomeworkRepository from "../../domain/repositories/HomeworkRepository.js";
import { HomeworkDatabaseAdapter } from "../../adapters/database/HomeworkDatabaseAdapter.js";

export default class HomeworkRepositoryImpl extends HomeworkRepository {
  constructor() {
    super();
    this.homeworkAdapter = new HomeworkDatabaseAdapter();
  }

  async getHomeworkById(homeworkId) {
    return await this.homeworkAdapter.getHomeworkById(homeworkId);
  }

  async getAllHomeworks() {
    return await this.homeworkAdapter.getAllHomeworks();
  }

  async createHomework(homeworkData) {
    return await this.homeworkAdapter.createHomework(homeworkData);
  }

  async updateHomework(homeworkId, updateData) {
    return await this.homeworkAdapter.updateHomework(homeworkId, updateData);
  }

  async deleteHomework(homeworkId) {
    return await this.homeworkAdapter.deleteHomework(homeworkId);
  }

  async getHomeworksByUserId(userId) {
    return await this.homeworkAdapter.getHomeworksByUserId(userId);
  }
}
