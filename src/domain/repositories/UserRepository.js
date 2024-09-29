import { ErrorFactory } from "../errors/ErrorFactory.js";

export default class UserRepository {
  async createUser(userData) {
    throw ErrorFactory.createError("NotImplemented", {
      methodName: "createUser",
    });
  }

  async getUserByEmail(email) {
    throw ErrorFactory.createError("NotImplemented", {
      methodName: "getUserByEmail",
    });
  }
}
