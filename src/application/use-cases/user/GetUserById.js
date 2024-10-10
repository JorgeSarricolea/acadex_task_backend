import { UserPresenter } from "../../../interfaces/presenters/UserPresenter.js";
import { ErrorFactory } from "../../services/ErrorFactory.js";

export default class GetUserById {
  constructor(userRepository) {
    this.userRepository = userRepository;
  }

  async execute(userId) {
    try {
      const user = await this.userRepository.getUserById(userId);
      if (!user) {
        throw ErrorFactory.createError("NotFoundError", {
          message: `User with id ${userId} not found`,
        });
      }
      return UserPresenter.present(user);
    } catch (error) {
      throw ErrorFactory.createError("DatabaseError", {
        message: "Failed to retrieve user",
        details: error.message,
      });
    }
  }
}
