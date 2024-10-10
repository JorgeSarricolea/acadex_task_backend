import UserRepository from "../../domain/repositories/UserRepository.js";
import { UserDatabaseAdapter } from "../../adapters/database/UserDatabaseAdapter.js";

export default class UserRepositoryImpl extends UserRepository {
  constructor() {
    super();
    this.userAdapter = new UserDatabaseAdapter();
  }

  async getUserById(userId) {
    return await this.userAdapter.getUserById(userId);
  }

  async getAllUsers() {
    return await this.userAdapter.getAllUsers();
  }

  async getUserByEmail(email) {
    return await this.userAdapter.getUserByEmail(email);
  }

  async createUser(userData) {
    return await this.userAdapter.createUser(userData);
  }

  async updateUser(userId, updateData) {
    return await this.userAdapter.updateUser(userId, updateData);
  }
}
