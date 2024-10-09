import { validateToken } from "../../application/services/AuthService.js";
import { ErrorFactory } from "../../application/services/ErrorFactory.js";

export default class AuthController {
  constructor({ signupUserUseCase, loginUserUseCase }) {
    this.signupUserUseCase = signupUserUseCase;
    this.loginUserUseCase = loginUserUseCase;
  }

  async signup(req, res, next) {
    try {
      const { firstName, lastName, email, password } = req.body;
      const user = await this.signupUserUseCase.execute({
        firstName,
        lastName,
        email,
        password,
      });
      res.status(201).json(user);
    } catch (error) {
      next(error);
    }
  }

  async login(req, res, next) {
    try {
      const { email, password } = req.body;
      const result = await this.loginUserUseCase.execute({ email, password });
      res.status(200).json(result);
    } catch (error) {
      next(error);
    }
  }

  async validateToken(req, res, next) {
    try {
      const token = req.headers["authorization"]?.split(" ")[1];
      if (!token) {
        const appError = ErrorFactory.createError("Validation", {
          message: "Token is missing",
        });
        return next(appError);
      }

      const secret = process.env.JWT_SECRET;
      const decoded = validateToken(token, secret);

      if (!decoded) {
        const appError = ErrorFactory.createError("Unauthorized");
        return next(appError);
      }

      res.status(200).json({ message: "Token is valid", decoded });
    } catch (error) {
      next(error);
    }
  }
}
