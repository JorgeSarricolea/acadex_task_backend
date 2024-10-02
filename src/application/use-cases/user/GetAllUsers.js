import { UserPresenter } from "../../../interfaces/presenters/UserPresenter.js";
import { ErrorFactory } from "../../services/ErrorFactory.js";

export default class GetAllUsers {
  constructor(userRepository) {
    this.userRepository = userRepository;
  }

  async execute() {
    try {
      const users = await this.userRepository.getAllUsers();
      return users.map((user) => UserPresenter.present(user));
    } catch (error) {
      throw ErrorFactory.createError("DatabaseError", {
        message: "Failed to retrieve users",
        details: error.message,
      });
    }
  }
}
