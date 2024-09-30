import { AppError } from "../../domain/errors/AppError.js";

/**
 * Middleware for handling errors across the application.
 * @param {Error} err - The error object thrown.
 * @param {Request} req - The Express request object.
 * @param {Response} res - The Express response object.
 * @param {Function} next - The Express next middleware function.
 */
export default function errorHandler(err, req, res, next) {
  if (err instanceof AppError) {

    // Operational, trusted error: send a clean response to the client
    const response = {
      error: err.message,
      code: err.code,
    };

    // Include additional details in response if available and in development mode
    if (err.details && process.env.NODE_ENV === "development") {
      response.details = err.details;
    }

    return res.status(err.statusCode).json(response);
  }

  // Unexpected, non-operational error: log it for further investigation
  console.error("Unexpected Error:", err);

  // Send a generic message to the client
  return res.status(500).json({
    error: "An unexpected error occurred. Please try again later.",
  });
}
