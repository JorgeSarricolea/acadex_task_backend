import { hashPassword } from "../../services/authService.js";
import { ErrorFactory } from "../../../domain/errors/ErrorFactory.js";
import { UserPresenter } from "../../../interfaces/presenters/UserPresenter.js";

export class SignupUser {
  constructor(userRepository) {
    this.userRepository = userRepository;
  }

  async execute({ firstName, lastName, email, password }) {
    const existingUser = await this.userRepository.getUserByEmail(email);
    if (existingUser) {
      throw ErrorFactory.createError("UserAlreadyExists");
    }

    const hashedPassword = await hashPassword(password);

    const newUser = {
      firstName,
      lastName,
      email,
      password: hashedPassword,
    };

    const createdUser = await this.userRepository.createUser(newUser);

    return UserPresenter.present(createdUser);
  }
}
