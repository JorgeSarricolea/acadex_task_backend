export class AppError extends Error {
  /**
   * Represents an application error.
   * @param {Object} options - Options to configure the error.
   * @param {string} options.message - Error message.
   * @param {number} options.statusCode - HTTP status code representing the type of error.
   * @param {string} options.code - Unique code for identifying the error type.
   * @param {boolean} [options.isOperational=true] - Whether the error is operational or unexpected.
   * @param {Object|null} [options.details=null] - Additional details about the error.
   */
  constructor({
    message,
    statusCode,
    code,
    isOperational = true,
    details = null,
  }) {
    super(message);
    this.name = this.constructor.name; // Assign the name of the subclass to the error
    this.statusCode = statusCode; // HTTP status code
    this.isOperational = isOperational; // Indicates if the error is expected and can be managed
    this.code = code; // Unique code for the error type
    this.details = details; // Additional details about the error (optional)
    Error.captureStackTrace(this, this.constructor);
  }
}

export default AppError;
