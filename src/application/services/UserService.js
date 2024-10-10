import { ErrorFactory } from "./ErrorFactory.js";

export default class UserService {
  constructor(userRepository) {
    this.userRepository = userRepository;
  }

  /**
   * Check if the email already exists for a different user.
   * @param {string} email - The email to be checked.
   * @param {string} [userId] - Optional userId to exclude from the check.
   * @throws Will throw an error if the email already exists for another user.
   */
  async checkIfEmailExists(email, userId = null) {
    const existingUser = await this.userRepository.getUserByEmail(email);
    if (existingUser && existingUser.id !== userId) {
      throw ErrorFactory.createError("Validation", {
        message: "Email already in use by another user",
        details: `User with email ${email} already exists`,
      });
    }
  }

  async getUserById(userId) {
    const user = await this.userRepository.getUserById(userId);
    if (!user) {
      throw ErrorFactory.createError("NotFound", {
        resource: "User",
        details: `User with ID ${userId} not found`,
      });
    }
    return user;
  }

  async updateUser(userId, updateData) {
    const updatedUser = await this.userRepository.updateUser(
      userId,
      updateData
    );
    if (!updatedUser) {
      throw ErrorFactory.createError("NotFound", {
        resource: "User",
        details: `User with ID ${userId} not found`,
      });
    }
    return updatedUser;
  }
}
