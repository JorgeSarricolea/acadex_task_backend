import { CategoryPresenter } from "../../../interfaces/presenters/CategoryPresenter.js";
import { ErrorFactory } from "../../services/ErrorFactory.js";

export default class GetAllCategories {
  constructor(categoryRepository) {
    this.categoryRepository = categoryRepository;
  }

  async execute() {
    try {
      const categories = await this.categoryRepository.getAllCategories();
      return categories.map((category) => CategoryPresenter.present(category));
    } catch (error) {
      throw ErrorFactory.createError("DatabaseError", {
        message: "Failed to retrieve categories",
        details: error.message,
      });
    }
  }
}
