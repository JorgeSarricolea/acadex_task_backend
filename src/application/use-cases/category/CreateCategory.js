import { CategoryPresenter } from "../../../interfaces/presenters/CategoryPresenter.js";
import { ErrorFactory } from "../../services/ErrorFactory.js";

export default class CreateCategory {
  constructor(categoryRepository) {
    this.categoryRepository = categoryRepository;
  }

  async execute(categoryData) {
    if (!categoryData || typeof categoryData !== "object") {
      throw ErrorFactory.createError("Validation", {
        message: "Category data is required",
        details: "No data was provided for creating a category",
      });
    }

    try {
      const newCategory = await this.categoryRepository.createCategory(
        categoryData
      );
      return CategoryPresenter.present(newCategory);
    } catch (error) {
      throw ErrorFactory.createError("DatabaseError", {
        message: "Failed to create category",
        details: error.message,
      });
    }
  }
}
