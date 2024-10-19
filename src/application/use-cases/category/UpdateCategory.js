import { CategoryPresenter } from "../../../interfaces/presenters/CategoryPresenter.js";
import { ErrorFactory } from "../../services/ErrorFactory.js";

export default class UpdateCategory {
  constructor(categoryRepository) {
    this.categoryRepository = categoryRepository;
  }

  async execute(categoryId, updateData) {
    if (!updateData || typeof updateData !== "object") {
      throw ErrorFactory.createError("Validation", {
        message: "Update data is required",
        details: "No data was provided for the update operation",
      });
    }

    try {
      const updatedCategory = await this.categoryRepository.updateCategory(
        categoryId,
        updateData
      );
      return CategoryPresenter.present(updatedCategory);
    } catch (error) {
      throw ErrorFactory.createError("DatabaseError", {
        message: "Failed to update category",
        details: error.message,
      });
    }
  }
}
