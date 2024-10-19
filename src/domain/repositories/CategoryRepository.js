import { ErrorFactory } from "../../application/services/ErrorFactory.js";

export default class CategoryRepository {
  async getCategoryById(categoryId) {
    throw ErrorFactory.createError("NotImplemented", {
      methodName: "getCategoryById",
    });
  }

  async getAllCategories() {
    throw ErrorFactory.createError("NotImplemented", {
      methodName: "getAllCategories",
    });
  }

  async createCategory(categoryData) {
    throw ErrorFactory.createError("NotImplemented", {
      methodName: "createCategory",
    });
  }

  async updateCategory(categoryId, updateData) {
    throw ErrorFactory.createError("NotImplemented", {
      methodName: "updateCategory",
    });
  }

  async deleteCategory(categoryId) {
    throw ErrorFactory.createError("NotImplemented", {
      methodName: "deleteCategory",
    });
  }
}
