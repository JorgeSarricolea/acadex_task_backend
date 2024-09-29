import UserRepository from "../../domain/repositories/UserRepository.js";
import { UserDatabaseAdapter } from "../../adapters/database/UserDatabaseAdapter.js";

export default class UserRepositoryImpl extends UserRepository {
  constructor() {
    super();
    this.userAdapter = new UserDatabaseAdapter();
  }

  async createUser(userData) {
    return await this.userAdapter.createUser(userData);
  }

  async getUserByEmail(email) {
    return await this.userAdapter.getUserByEmail(email);
  }
}
