import { HomeworkPresenter } from "../../../interfaces/presenters/HomeworkPresenter.js";
import { ErrorFactory } from "../../services/ErrorFactory.js";

export default class UpdateHomework {
  constructor(homeworkRepository) {
    this.homeworkRepository = homeworkRepository;
  }

  async execute(homeworkId, updateData) {
    if (!updateData || typeof updateData !== "object") {
      throw ErrorFactory.createError("Validation", {
        message: "Update data is required",
        details: "No data was provided for the update operation",
      });
    }

    try {
      const updatedHomework = await this.homeworkRepository.updateHomework(
        homeworkId,
        updateData
      );
      return HomeworkPresenter.present(updatedHomework);
    } catch (error) {
      throw ErrorFactory.createError("DatabaseError", {
        message: "Failed to update homework",
        details: error.message,
      });
    }
  }
}
