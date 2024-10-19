import express from "express";
import prisma from "../database/prisma.js";
import CategoryController from "../../interfaces/controllers/CategoryController.js";
import CategoryRepositoryImpl from "../database/CategoryRepositoryImpl.js";
import GetAllCategories from "../../application/use-cases/category/GetAllCategories.js";
import GetCategoryById from "../../application/use-cases/category/GetCategoryById.js";
import CreateCategory from "../../application/use-cases/category/CreateCategory.js";
import UpdateCategory from "../../application/use-cases/category/UpdateCategory.js";
import DeleteCategory from "../../application/use-cases/category/DeleteCategory.js";

const router = express.Router();
const categoryRepository = new CategoryRepositoryImpl(prisma);

// Use cases
const getAllCategories = new GetAllCategories(categoryRepository);
const getCategoryById = new GetCategoryById(categoryRepository);
const createCategory = new CreateCategory(categoryRepository);
const updateCategory = new UpdateCategory(categoryRepository);
const deleteCategory = new DeleteCategory(categoryRepository);

// Controller
const categoryController = new CategoryController({
  getAllCategoriesUseCase: getAllCategories,
  getCategoryByIdUseCase: getCategoryById,
  createCategoryUseCase: createCategory,
  updateCategoryUseCase: updateCategory,
  deleteCategoryUseCase: deleteCategory,
});

// Routes
router.get("/", (req, res, next) => categoryController.getAll(req, res, next));
router.get("/:id", (req, res, next) =>
  categoryController.getById(req, res, next)
);
router.post("/", (req, res, next) => categoryController.create(req, res, next));
router.put("/:id", (req, res, next) =>
  categoryController.update(req, res, next)
);
router.delete("/:id", (req, res, next) =>
  categoryController.delete(req, res, next)
);

export default router;
