import express from "express";
import prisma from "../database/prisma.js";
import HomeworkController from "../../interfaces/controllers/HomeworkController.js";
import HomeworkRepositoryImpl from "../database/HomeworkRepositoryImpl.js";

import GetAllHomeworks from "../../application/use-cases/homework/GetAllHomeworks.js";
import GetHomeworkById from "../../application/use-cases/homework/GetHomeworkById.js";
import UpdateHomework from "../../application/use-cases/homework/UpdateHomework.js";
import CreateHomework from "../../application/use-cases/homework/CreateHomework.js";
import DeleteHomework from "../../application/use-cases/homework/DeleteHomework.js";

const router = express.Router();
const homeworkRepository = new HomeworkRepositoryImpl(prisma);

// Use cases
const getAllHomeworks = new GetAllHomeworks(homeworkRepository);
const getHomeworkById = new GetHomeworkById(homeworkRepository);
const updateHomework = new UpdateHomework(homeworkRepository);
const createHomework = new CreateHomework(homeworkRepository);
const deleteHomework = new DeleteHomework(homeworkRepository);

// Controller
const homeworkController = new HomeworkController({
  getAllHomeworksUseCase: getAllHomeworks,
  getHomeworkByIdUseCase: getHomeworkById,
  updateHomeworkUseCase: updateHomework,
  createHomeworkUseCase: createHomework,
  deleteHomeworkUseCase: deleteHomework,
});

/**
 * @swagger
 * tags:
 *   name: Homeworks
 *   description: Homeworks management API
 */

/**
 * @swagger
 * /api/v1/homeworks:
 *   get:
 *     summary: Retrieve a list of all homeworks
 *     tags: [Homeworks]
 *     responses:
 *       200:
 *         description: Successfully retrieved the list of homeworks
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Homework'
 */
router.get("/", (req, res, next) => homeworkController.getAll(req, res, next));

/**
 * @swagger
 * /api/v1/homeworks:
 *   post:
 *     summary: Create a new homework
 *     tags: [Homeworks]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *                 description: The title of the homework
 *               description:
 *                 type: string
 *                 description: The description of the homework
 *               startDate:
 *                 type: string
 *                 format: date
 *                 description: The start date of the homework
 *               endDate:
 *                 type: string
 *                 format: date
 *                 description: The end date of the homework
 *             required:
 *               - title
 *               - startDate
 *               - endDate
 *     responses:
 *       201:
 *         description: Homework created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Homework'
 *       400:
 *         description: Validation error
 */
router.post("/", (req, res, next) => homeworkController.create(req, res, next));

/**
 * @swagger
 * /api/v1/homeworks/{id}:
 *   get:
 *     summary: Retrieve a homework by ID
 *     tags: [Homeworks]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: The ID of the homework to retrieve
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Successfully retrieved the homework
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Homework'
 *       404:
 *         description: Homework not found
 */
router.get("/:id", (req, res, next) =>
  homeworkController.getById(req, res, next)
);

/**
 * @swagger
 * /api/v1/homeworks/{id}:
 *   put:
 *     summary: Update a homework by ID
 *     tags: [Homeworks]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: The ID of the homework to update
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *                 description: The updated title of the homework
 *               description:
 *                 type: string
 *                 description: The updated description of the homework
 *               startDate:
 *                 type: string
 *                 format: date
 *                 description: The updated start date of the homework
 *               endDate:
 *                 type: string
 *                 format: date
 *                 description: The updated end date of the homework
 *     responses:
 *       200:
 *         description: Homework updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Homework'
 *       404:
 *         description: Homework not found
 *       400:
 *         description: Validation error
 */
router.put("/:id", (req, res, next) =>
  homeworkController.update(req, res, next)
);

/**
 * @swagger
 * /api/v1/homeworks/{id}:
 *   delete:
 *     summary: Delete a homework by ID
 *     tags: [Homeworks]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: The ID of the homework to delete
 *         schema:
 *           type: string
 *     responses:
 *       204:
 *         description: Homework deleted successfully
 *       404:
 *         description: Homework not found
 */
router.delete("/:id", (req, res, next) =>
  homeworkController.delete(req, res, next)
);

/**
 * @swagger
 * components:
 *   schemas:
 *     Homework:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *           description: The homework ID
 *         title:
 *           type: string
 *           description: The title of the homework
 *         description:
 *           type: string
 *           description: The homework description
 *         startDate:
 *           type: string
 *           format: date
 *           description: The homework's start date
 *         endDate:
 *           type: string
 *           format: date
 *           description: The homework's end date
 */
export default router;
