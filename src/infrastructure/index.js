import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
const app = express();

// Imports
import errorHandler from "../interfaces/middlewares/errorHandler.js";
import authRoutes from "./routes/AuthRoutes.js";

// Middlewares
app.use(errorHandler);

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

const PORT = 8000;
app.listen(PORT, () => {
  console.log(`🚀 Server launched on http://localhost:${PORT}`);
});
