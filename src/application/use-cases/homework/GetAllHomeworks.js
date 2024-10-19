import { HomeworkPresenter } from "../../../interfaces/presenters/HomeworkPresenter.js";
import { ErrorFactory } from "../../services/ErrorFactory.js";

export default class GetAllHomeworks {
  constructor(homeworkRepository) {
    this.homeworkRepository = homeworkRepository;
  }

  async execute() {
    try {
      const homeworks = await this.homeworkRepository.getAllHomeworks();
      return homeworks.map((homework) => HomeworkPresenter.present(homework));
    } catch (error) {
      throw ErrorFactory.createError("DatabaseError", {
        message: "Failed to retrieve homeworks",
        details: error.message,
      });
    }
  }
}
