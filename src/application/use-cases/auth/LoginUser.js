import { comparePasswords, generateToken } from "../../services/authService.js";
import { ErrorFactory } from "../../../domain/errors/ErrorFactory.js";
import { UserPresenter } from "../../../interfaces/presenters/UserPresenter.js";

export class LoginUser {
  constructor(userRepository) {
    this.userRepository = userRepository;
  }

  async execute({ email, password }) {
    const user = await this.userRepository.getUserByEmail(email);
    if (!user) {
      throw ErrorFactory.createError("InvalidCredentials");
    }

    const isPasswordValid = await comparePasswords(password, user.password);
    if (!isPasswordValid) {
      throw ErrorFactory.createError("InvalidCredentials");
    }

    const token = generateToken(
      { id: user.id, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    return UserPresenter.present(user, token);
  }
}
