export default class HomeworkController {
  constructor({
    getAllHomeworksUseCase,
    updateHomeworkUseCase,
    getHomeworkByIdUseCase,
    createHomeworkUseCase,
    deleteHomeworkUseCase,
  }) {
    this.getAllHomeworksUseCase = getAllHomeworksUseCase;
    this.updateHomeworkUseCase = updateHomeworkUseCase;
    this.getHomeworkByIdUseCase = getHomeworkByIdUseCase;
    this.createHomeworkUseCase = createHomeworkUseCase;
    this.deleteHomeworkUseCase = deleteHomeworkUseCase;

    this.getAll = this.getAll.bind(this);
    this.update = this.update.bind(this);
    this.getById = this.getById.bind(this);
    this.create = this.create.bind(this);
    this.delete = this.delete.bind(this);
  }

  async getAll(req, res, next) {
    try {
      const homeworks = await this.getAllHomeworksUseCase.execute();
      res.status(200).json(homeworks);
    } catch (error) {
      next(error);
    }
  }

  async getById(req, res, next) {
    try {
      const homeworkId = req.params.id;
      const homework = await this.getHomeworkByIdUseCase.execute(homeworkId);
      res.status(200).json(homework);
    } catch (error) {
      next(error);
    }
  }

  async create(req, res, next) {
    try {
      const homeworkData = req.body;
      const newHomework = await this.createHomeworkUseCase.execute(
        homeworkData
      );
      res.status(201).json(newHomework);
    } catch (error) {
      next(error);
    }
  }

  async update(req, res, next) {
    try {
      const homeworkId = req.params.id;
      const homeworkData = req.body;
      const updatedHomework = await this.updateHomeworkUseCase.execute(
        homeworkId,
        homeworkData
      );
      res.status(200).json(updatedHomework);
    } catch (error) {
      next(error);
    }
  }

  async delete(req, res, next) {
    try {
      const homeworkId = req.params.id;
      await this.deleteHomeworkUseCase.execute(homeworkId);
      res.status(204).send();
    } catch (error) {
      next(error);
    }
  }
}
