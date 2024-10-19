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

// Routes
router.get("/", (req, res, next) => homeworkController.getAll(req, res, next));
router.post("/", (req, res, next) => homeworkController.create(req, res, next));
router.get("/:id", (req, res, next) =>
  homeworkController.getById(req, res, next)
);
router.put("/:id", (req, res, next) =>
  homeworkController.update(req, res, next)
);
router.delete("/:id", (req, res, next) =>
  homeworkController.delete(req, res, next)
);

export default router;
