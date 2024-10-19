import { HomeworkPresenter } from "../../../interfaces/presenters/HomeworkPresenter.js";
import { ErrorFactory } from "../../services/ErrorFactory.js";

export default class CreateHomework {
  constructor(homeworkRepository) {
    this.homeworkRepository = homeworkRepository;
  }

  async execute(homeworkData) {
    if (!homeworkData || typeof homeworkData !== "object") {
      throw ErrorFactory.createError("Validation", {
        message: "Homework data is required",
        details: "No data was provided for creating a homework",
      });
    }

    try {
      const newHomework = await this.homeworkRepository.createHomework(
        homeworkData
      );
      return HomeworkPresenter.present(newHomework);
    } catch (error) {
      throw ErrorFactory.createError("DatabaseError", {
        message: "Failed to create homework",
        details: error.message,
      });
    }
  }
}
