import { HomeworkPresenter } from "../../../interfaces/presenters/HomeworkPresenter.js";
import { ErrorFactory } from "../../services/ErrorFactory.js";

export default class GetHomeworkById {
  constructor(homeworkRepository) {
    this.homeworkRepository = homeworkRepository;
  }

  async execute(homeworkId) {
    try {
      const homework = await this.homeworkRepository.getHomeworkById(
        homeworkId
      );
      if (!homework) {
        throw ErrorFactory.createError("NotFoundError", {
          message: `Homework with id ${homeworkId} not found`,
        });
      }
      return HomeworkPresenter.present(homework);
    } catch (error) {
      throw ErrorFactory.createError("DatabaseError", {
        message: "Failed to retrieve homework",
        details: error.message,
      });
    }
  }
}
