import { ErrorFactory } from "../../application/services/ErrorFactory.js";

export default class UserRepository {
  async getUserById(userId) {
    throw ErrorFactory.createError("NotImplemented", {
      methodName: "getUserById",
    });
  }

  async getAllUsers() {
    throw ErrorFactory.createError("NotImplemented", {
      methodName: "getAllUsers",
    });
  }

  async getUserByEmail(email) {
    throw ErrorFactory.createError("NotImplemented", {
      methodName: "getUserByEmail",
    });
  }

  async createUser(userData) {
    throw ErrorFactory.createError("NotImplemented", {
      methodName: "createUser",
    });
  }

  async updateUser(userId, updateData) {
    throw ErrorFactory.createError("NotImplemented", {
      methodName: "updateUser",
    });
  }
}
