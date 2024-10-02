export default class UserController {
  constructor({ getAllUsersUseCase, updateUserUseCase }) {
    this.getAllUsersUseCase = getAllUsersUseCase;
    this.updateUserUseCase = updateUserUseCase;

    this.getAll = this.getAll.bind(this);
    this.update = this.update.bind(this);
  }

  async getAll(req, res, next) {
    try {
      const users = await this.getAllUsersUseCase.execute();
      res.status(200).json(users);
    } catch (error) {
      next(error);
    }
  }

  async update(req, res, next) {
    try {
      const userId = req.params.id;
      const userData = req.body;
      const updatedUser = await this.updateUserUseCase.execute(
        userId,
        userData
      );
      res.status(200).json(updatedUser);
    } catch (error) {
      next(error);
    }
  }
}
