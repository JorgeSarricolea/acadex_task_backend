import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
const app = express();

// Import the routes

// Middlewares

// Enable CORS for all requests
app.use(
  cors({
    origin: process.env.ALLOWED_ORIGIN || "http://localhost:3000",
  })
);

// Use bodyParser to parse the body of requests as JSON
app.use(express.json());

// Endpoints

const PORT = 8000;
app.listen(PORT, () => {
  console.log(`🚀 Server launched on http://localhost:${PORT}`);
});
