export default class AuthController {
  constructor(signupUserUseCase, loginUserUseCase) {
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
}
