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

/**
 * @swagger
 * tags:
 *   name: Categories
 *   description: Categories management API
 */

/**
 * @swagger
 * /api/v1/categories:
 *   get:
 *     summary: Retrieve a list of all categories
 *     tags: [Categories]
 *     responses:
 *       200:
 *         description: Successfully retrieved the list of categories
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Category'
 */
router.get("/", (req, res, next) => categoryController.getAll(req, res, next));

/**
 * @swagger
 * /api/v1/categories/{id}:
 *   get:
 *     summary: Retrieve a category by ID
 *     tags: [Categories]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: The ID of the category to retrieve
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Successfully retrieved the category
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Category'
 *       404:
 *         description: Category not found
 */
router.get("/:id", (req, res, next) =>
  categoryController.getById(req, res, next)
);

/**
 * @swagger
 * /api/v1/categories:
 *   post:
 *     summary: Create a new category
 *     tags: [Categories]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: The name of the new category
 *             required:
 *               - name
 *     responses:
 *       201:
 *         description: Category created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Category'
 *       400:
 *         description: Validation error
 */
router.post("/", (req, res, next) => categoryController.create(req, res, next));

/**
 * @swagger
 * /api/v1/categories/{id}:
 *   put:
 *     summary: Update a category by ID
 *     tags: [Categories]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: The ID of the category to update
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: The updated name of the category
 *     responses:
 *       200:
 *         description: Category updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Category'
 *       404:
 *         description: Category not found
 *       400:
 *         description: Validation error
 */
router.put("/:id", (req, res, next) =>
  categoryController.update(req, res, next)
);

/**
 * @swagger
 * /api/v1/categories/{id}:
 *   delete:
 *     summary: Delete a category by ID
 *     tags: [Categories]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: The ID of the category to delete
 *         schema:
 *           type: string
 *     responses:
 *       204:
 *         description: Category deleted successfully
 *       404:
 *         description: Category not found
 */
router.delete("/:id", (req, res, next) =>
  categoryController.delete(req, res, next)
);

/**
 * @swagger
 * components:
 *   schemas:
 *     Category:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *           description: The category ID
 *         name:
 *           type: string
 *           description: The name of the category
 *         homeworks:
 *           type: array
 *           items:
 *             type: object
 *             properties:
 *               id:
 *                 type: string
 *                 description: The homework ID
 *               title:
 *                 type: string
 *                 description: The title of the homework
 *               description:
 *                 type: string
 *                 description: The homework description
 *               startDate:
 *                 type: string
 *                 format: date
 *                 description: The homework's start date
 *               endDate:
 *                 type: string
 *                 format: date
 *                 description: The homework's end date
 */
export default router;
