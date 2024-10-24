import express from "express";
import prisma from "../database/prisma.js";
import AuthController from "../../interfaces/controllers/AuthController.js";
import UserRepositoryImpl from "../database/UserRepositoryImpl.js";
import { SignupUser } from "../../application/use-cases/auth/SignupUser.js";
import { LoginUser } from "../../application/use-cases/auth/LoginUser.js";

const router = express.Router();
const userRepository = new UserRepositoryImpl(prisma);

// Use cases
const signupUser = new SignupUser(userRepository);
const loginUser = new LoginUser(userRepository);

// Controllers
const authController = new AuthController({
  signupUserUseCase: signupUser,
  loginUserUseCase: loginUser,
});

/**
 * @swagger
 * tags:
 *   name: Auth
 *   description: Authentication endpoints
 */

/**
 * @swagger
 * /api/v1/auth/signup:
 *   post:
 *     summary: Register a new user
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - firstName
 *               - email
 *               - password
 *             properties:
 *               firstName:
 *                 type: string
 *               lastName:
 *                 type: string
 *               email:
 *                 type: string
 *                 format: email
 *               password:
 *                 type: string
 *     responses:
 *       201:
 *         description: User registered successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       400:
 *         description: Validation error
 *       500:
 *         description: Internal server error
 */
router.post("/signup", (req, res, next) =>
  authController.signup(req, res, next)
);

/**
 * @swagger
 * /api/v1/auth/login:
 *   post:
 *     summary: Log in a user
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: User logged in successfully
 *       401:
 *         description: Unauthorized
 */
router.post("/login", (req, res, next) => authController.login(req, res, next));

/**
 * @swagger
 * /api/v1/auth/validate-token:
 *   post:
 *     summary: Validate a JWT token
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               token:
 *                 type: string
 *                 description: The JWT token to validate
 *             required:
 *               - token
 *     responses:
 *       200:
 *         description: Token is valid
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 valid:
 *                   type: boolean
 *                   example: true
 *                 message:
 *                   type: string
 *                   example: "Token is valid"
 *       401:
 *         description: Unauthorized
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 valid:
 *                   type: boolean
 *                   example: false
 *                 message:
 *                   type: string
 *                   example: "Invalid token"
 */
router.post("/validate-token", (req, res, next) =>
  authController.validateToken(req, res, next)
);

/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           format: int64
 *         firstName:
 *           type: string
 *         lastName:
 *           type: string
 *         email:
 *           type: string
 *           format: email
 *       required:
 *         - id
 *         - firstName
 *         - email
 */
export default router;
