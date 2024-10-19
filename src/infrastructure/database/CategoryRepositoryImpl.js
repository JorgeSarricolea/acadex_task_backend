import CategoryRepository from "../../domain/repositories/CategoryRepository.js";
import { CategoryDatabaseAdapter } from "../../adapters/database/CategoryDatabaseAdapter.js";

export default class CategoryRepositoryImpl extends CategoryRepository {
  constructor() {
    super();
    this.categoryAdapter = new CategoryDatabaseAdapter();
  }

  async getCategoryById(categoryId) {
    return await this.categoryAdapter.getCategoryById(categoryId);
  }

  async getAllCategories() {
    return await this.categoryAdapter.getAllCategories();
  }

  async createCategory(categoryData) {
    return await this.categoryAdapter.createCategory(categoryData);
  }

  async updateCategory(categoryId, updateData) {
    return await this.categoryAdapter.updateCategory(categoryId, updateData);
  }

  async deleteCategory(categoryId) {
    return await this.categoryAdapter.deleteCategory(categoryId);
  }
}
