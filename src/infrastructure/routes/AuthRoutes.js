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

// Routes
router.post("/signup", (req, res, next) =>
  authController.signup(req, res, next)
);
router.post("/login", (req, res, next) => authController.login(req, res, next));

export default router;
