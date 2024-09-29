import { AppError } from "./AppError.js";
import { ERROR_CODES } from "./ErrorConfig.js";

export class UserAlreadyExistsError extends AppError {
  constructor(details = null) {
    super({ ...ERROR_CODES.USER_ALREADY_EXISTS, details });
  }
}

export class InvalidCredentialsError extends AppError {
  constructor(details = null) {
    super({ ...ERROR_CODES.INVALID_CREDENTIALS, details });
  }
}

export class NotFoundError extends AppError {
  constructor(resource = "Resource", details = null) {
    super({
      ...ERROR_CODES.NOT_FOUND,
      message: `${resource} not found`,
      details,
    });
  }
}

export class ValidationError extends AppError {
  constructor(message, details = null) {
    super({ ...ERROR_CODES.BAD_REQUEST, message, details });
  }
}

export class NotImplementedError extends AppError {
  constructor(methodName) {
    super({
      message: `${methodName} is not implemented`,
      statusCode: 501, // 501 Not Implemented
    });
  }
}
