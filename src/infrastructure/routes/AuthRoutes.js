import express from "express";
import prisma from "../database/prisma.js";
import AuthController from "../../interfaces/controllers/AuthController.js";
import UserRepositoryImpl from "../database/UserRepositoryImpl.js";
import { SignupUser } from "../../application/use-cases/auth/SignupUser.js";
import { LoginUser } from "../../application/use-cases/auth/LoginUser.js";

const router = express.Router();

const userRepository = new UserRepositoryImpl(prisma);

const signupUser = new SignupUser(userRepository);
const loginUser = new LoginUser(userRepository);

const authController = new AuthController(signupUser, loginUser);

router.post("/signup", (req, res) => authController.signup(req, res));
router.post("/login", (req, res) => authController.login(req, res));

export default router;
