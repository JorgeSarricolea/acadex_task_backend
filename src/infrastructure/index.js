import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
const app = express();

// Imports
import errorHandler from "../interfaces/middlewares/errorHandler.js";
import authRoutes from "./routes/AuthRoutes.js";
import userRoutes from "./routes/UserRoutes.js";
import homeworkRoutes from "./routes/HomeworkRoutes.js";
import categoryRoutes from "./routes/CategoryRoutes.js";

import { swaggerUi, swaggerDocs } from "./swagger.js";

// Enable CORS for all requests
app.use(
  cors({
    origin: process.env.ALLOWED_ORIGIN || "http://localhost:3000",
  })
);

// Use bodyParser to parse the body of requests as JSON
app.use(express.json());

// Endpoints
app.use("/api/v1/auth/", authRoutes);
app.use("/api/v1/users/", userRoutes);
app.use("/api/v1/homeworks/", homeworkRoutes);
app.use("/api/v1/categories/", categoryRoutes);

// Docs
app.use("/api/v1/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// Middlewares
app.use(errorHandler);

const PORT = 8000;
app.listen(PORT, () => {
  console.log(`🚀 Server launched on http://localhost:${PORT}`);
});
