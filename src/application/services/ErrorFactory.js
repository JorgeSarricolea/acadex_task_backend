import {
  UserAlreadyExistsError,
  InvalidCredentialsError,
  ValidationError,
  NotFoundError,
  NotImplementedError,
  UnauthorizedError,
} from "../../domain/errors/CustomErrors.js";

const errorMap = {
  UserAlreadyExists: (params) => new UserAlreadyExistsError(params?.details),
  InvalidCredentials: (params) => new InvalidCredentialsError(params?.details),
  Unauthorized: (params) => new UnauthorizedError(params?.details),
  Validation: (params) => new ValidationError(params?.message, params?.details),
  NotFound: (params) => new NotFoundError(params?.resource, params?.details),
  NotImplemented: (params) =>
    new NotImplementedError(params?.methodName, params?.details),
  DatabaseError: (params) => new Error(params?.details),
};

export class ErrorFactory {
  /**
   * Creates an error object based on the provided error type and parameters.
   * @param {string} type - The type of error to create.
   * @param {Object} [params={}] - Optional parameters for the error.
   * @returns {AppError|Error} - An instance of the specific error or a generic Error if type is unknown.
   */
  static createError(type, params = {}) {
    // Validate if the error type exists in the error map
    if (!errorMap.hasOwnProperty(type)) {
      return new Error(`Unknown error type: ${type}`);
    }

    // Create and return the appropriate error using the provided parameters
    return errorMap[type](params);
  }
}
