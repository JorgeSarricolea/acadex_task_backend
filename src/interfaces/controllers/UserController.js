export default class UserController {
  constructor({ getAllUsersUseCase, updateUserUseCase, getUserByIdUseCase }) {
    this.getAllUsersUseCase = getAllUsersUseCase;
    this.updateUserUseCase = updateUserUseCase;
    this.getUserByIdUseCase = getUserByIdUseCase;

    this.getAll = this.getAll.bind(this);
    this.update = this.update.bind(this);
    this.getById = this.getById.bind(this);
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

  async getById(req, res, next) {
    try {
      const userId = req.params.id;
      const user = await this.getUserByIdUseCase.execute(userId);
      res.status(200).json(user);
    } catch (error) {
      next(error);
    }
  }
}
