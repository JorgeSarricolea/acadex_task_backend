// src/application/use-cases/user/UpdateUser.js
import { UserPresenter } from "../../../interfaces/presenters/UserPresenter.js";
import UserService from "../../services/userService.js";
import { ErrorFactory } from "../../services/ErrorFactory.js";

export default class UpdateUser {
  constructor(userRepository) {
    this.userService = new UserService(userRepository);
  }

  async execute(userId, updateData) {
    if (!updateData || typeof updateData !== "object") {
      throw ErrorFactory.createError("Validation", {
        message: "Update data is required",
        details: "No data was provided for the update operation",
      });
    }

    // Verify if the email is already being used by another user
    if (updateData.email) {
      await this.userService.checkIfEmailExists(updateData.email, userId);
    }

    // Update the user in the database
    const updatedUser = await this.userService.updateUser(userId, updateData);

    return UserPresenter.present(updatedUser);
  }
}
