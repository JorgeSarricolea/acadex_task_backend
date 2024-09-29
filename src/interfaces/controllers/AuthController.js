export default class AuthController {
  constructor(signupUserUseCase, loginUserUseCase) {
    this.signupUserUseCase = signupUserUseCase;
    this.loginUserUseCase = loginUserUseCase;
  }

  async signup(req, res) {
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
      res.status(400).json({ error: error.message });
    }
  }

  async login(req, res) {
    try {
      const { email, password } = req.body;
      const result = await this.loginUserUseCase.execute({ email, password });
      res.status(200).json(result);
    } catch (error) {
      res.status(401).json({ error: error.message });
    }
  }
}
