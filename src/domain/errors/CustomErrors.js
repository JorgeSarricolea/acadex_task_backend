import { AppError } from "./AppError.js";
import { ERROR_CODES } from "./ErrorConfig.js";

export class UserAlreadyExistsError extends AppError {
  constructor(details = null) {
    super({
      ...ERROR_CODES.AUTH_ERRORS.USER_ALREADY_EXISTS,
      details,
    });
  }
}

export class InvalidCredentialsError extends AppError {
  constructor(details = null) {
    super({
      ...ERROR_CODES.AUTH_ERRORS.INVALID_CREDENTIALS,
      details,
    });
  }
}

export class UnauthorizedError extends AppError {
  constructor(details = null) {
    super({
      ...ERROR_CODES.AUTH_ERRORS.UNAUTHORIZED,
      details,
    });
  }
}

export class NotFoundError extends AppError {
  constructor(resource = "Resource", details = null) {
    super({
      ...ERROR_CODES.RESOURCE_ERRORS.NOT_FOUND,
      message: `${resource} not found`,
      details,
    });
  }
}

export class ValidationError extends AppError {
  constructor(message, details = null) {
    super({
      ...ERROR_CODES.VALIDATION_ERRORS.BAD_REQUEST,
      message,
      details,
    });
  }
}

export class NotImplementedError extends AppError {
  constructor(methodName, details = null) {
    super({
      ...ERROR_CODES.GENERAL_ERRORS.NOT_IMPLEMENTED,
      message: `${methodName} is not implemented`,
      details,
    });
  }
}

export class DatabaseError extends AppError {
  constructor(details = null) {
    super({
      ...ERROR_CODES.DATABASE_ERRORS.DATABASE_ERROR,
      details,
    });
  }
}
