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

/**
 * @swagger
 * tags:
 *   name: Users
 *   description: Users management API
 */

/**
 * @swagger
 * /api/v1/users:
 *   get:
 *     summary: Retrieve a list of all users
 *     tags: [Users]
 *     responses:
 *       200:
 *         description: Successfully retrieved the list of users
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/User'
 */
router.get("/", (req, res, next) => userController.getAll(req, res, next));

/**
 * @swagger
 * /api/v1/users/{id}:
 *   get:
 *     summary: Retrieve a user by ID
 *     tags: [Users]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: The ID of the user to retrieve
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Successfully retrieved the user
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       404:
 *         description: User not found
 */
router.get("/:id", (req, res, next) => userController.getById(req, res, next));

/**
 * @swagger
 * /api/v1/users/{id}:
 *   put:
 *     summary: Update a user by ID
 *     tags: [Users]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: The ID of the user to update
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
 *                 description: The updated name of the user
 *               email:
 *                 type: string
 *                 format: email
 *                 description: The updated email of the user
 *               role:
 *                 type: string
 *                 description: The updated role of the user
 *             required:
 *               - name
 *               - email
 *     responses:
 *       200:
 *         description: User updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       404:
 *         description: User not found
 *       400:
 *         description: Validation error
 */
router.put("/:id", (req, res, next) => userController.update(req, res, next));

/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *           description: The user ID
 *         name:
 *           type: string
 *           description: The name of the user
 *         email:
 *           type: string
 *           format: email
 *           description: The email of the user
 *         role:
 *           type: string
 *           description: The role of the user
 */
export default router;
