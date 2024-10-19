import { ErrorFactory } from "../../services/ErrorFactory.js";

export default class DeleteCategory {
  constructor(categoryRepository) {
    this.categoryRepository = categoryRepository;
  }

  async execute(categoryId) {
    try {
      await this.categoryRepository.deleteCategory(categoryId);
      return { success: true };
    } catch (error) {
      throw ErrorFactory.createError("DatabaseError", {
        message: "Failed to delete category",
        details: error.message,
      });
    }
  }
}
