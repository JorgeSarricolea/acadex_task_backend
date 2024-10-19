import { ErrorFactory } from "../../services/ErrorFactory.js";

export default class DeleteHomework {
  constructor(homeworkRepository) {
    this.homeworkRepository = homeworkRepository;
  }

  async execute(homeworkId) {
    try {
      await this.homeworkRepository.deleteHomework(homeworkId);
      return { success: true };
    } catch (error) {
      throw ErrorFactory.createError("DatabaseError", {
        message: "Failed to delete homework",
        details: error.message,
      });
    }
  }
}
