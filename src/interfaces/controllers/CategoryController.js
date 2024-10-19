export default class CategoryController {
  constructor({
    getAllCategoriesUseCase,
    getCategoryByIdUseCase,
    createCategoryUseCase,
    updateCategoryUseCase,
    deleteCategoryUseCase,
  }) {
    this.getAllCategoriesUseCase = getAllCategoriesUseCase;
    this.getCategoryByIdUseCase = getCategoryByIdUseCase;
    this.createCategoryUseCase = createCategoryUseCase;
    this.updateCategoryUseCase = updateCategoryUseCase;
    this.deleteCategoryUseCase = deleteCategoryUseCase;

    this.getAll = this.getAll.bind(this);
    this.getById = this.getById.bind(this);
    this.create = this.create.bind(this);
    this.update = this.update.bind(this);
    this.delete = this.delete.bind(this);
  }

  async getAll(req, res, next) {
    try {
      const categories = await this.getAllCategoriesUseCase.execute();
      res.status(200).json(categories);
    } catch (error) {
      next(error);
    }
  }

  async getById(req, res, next) {
    try {
      const categoryId = req.params.id;
      const category = await this.getCategoryByIdUseCase.execute(categoryId);
      res.status(200).json(category);
    } catch (error) {
      next(error);
    }
  }

  async create(req, res, next) {
    try {
      const categoryData = req.body;
      const newCategory = await this.createCategoryUseCase.execute(
        categoryData
      );
      res.status(201).json(newCategory);
    } catch (error) {
      next(error);
    }
  }

  async update(req, res, next) {
    try {
      const categoryId = req.params.id;
      const categoryData = req.body;
      const updatedCategory = await this.updateCategoryUseCase.execute(
        categoryId,
        categoryData
      );
      res.status(200).json(updatedCategory);
    } catch (error) {
      next(error);
    }
  }

  async delete(req, res, next) {
    try {
      const categoryId = req.params.id;
      await this.deleteCategoryUseCase.execute(categoryId);
      res.status(204).send();
    } catch (error) {
      next(error);
    }
  }
}
