import { CategoryPresenter } from "../../../interfaces/presenters/CategoryPresenter.js";
import { ErrorFactory } from "../../services/ErrorFactory.js";

export default class GetCategoryById {
  constructor(categoryRepository) {
    this.categoryRepository = categoryRepository;
  }

  async execute(categoryId) {
    try {
      const category = await this.categoryRepository.getCategoryById(
        categoryId
      );
      if (!category) {
        throw ErrorFactory.createError("NotFoundError", {
          message: `Category with id ${categoryId} not found`,
        });
      }
      return CategoryPresenter.present(category);
    } catch (error) {
      throw ErrorFactory.createError("DatabaseError", {
        message: "Failed to retrieve category",
        details: error.message,
      });
    }
  }
}
