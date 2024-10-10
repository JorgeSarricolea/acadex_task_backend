import express from "express";
import prisma from "../database/prisma.js";
import UserController from "../../interfaces/controllers/UserController.js";
import UserRepositoryImpl from "../database/UserRepositoryImpl.js";
import GetAllUsers from "../../application/use-cases/user/GetAllUsers.js";
import UpdateUser from "../../application/use-cases/user/UpdateUser.js";
import GetUserById from "../../application/use-cases/user/GetUserById.js";

const router = express.Router();
const userRepository = new UserRepositoryImpl(prisma);

// Use cases
const updateUser = new UpdateUser(userRepository);
const getAllUsers = new GetAllUsers(userRepository);
const getUserById = new GetUserById(userRepository);

// Controllers
const userController = new UserController({
  getAllUsersUseCase: getAllUsers,
  updateUserUseCase: updateUser,
  getUserByIdUseCase: getUserById,
});

// Routes
router.get("/", (req, res, next) => userController.getAll(req, res, next));
router.put("/:id", (req, res, next) => userController.update(req, res, next));
router.get("/:id", (req, res, next) => userController.getById(req, res, next));

export default router;
