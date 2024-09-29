import {
  UserAlreadyExistsError,
  InvalidCredentialsError,
  ValidationError,
  NotFoundError,
  NotImplementedError,
} from "./CustomErrors.js";

const errorMap = {
  UserAlreadyExists: () => new UserAlreadyExistsError(),
  InvalidCredentials: () => new InvalidCredentialsError(),
  Validation: (params) => new ValidationError(params?.message),
  NotFound: (params) => new NotFoundError(params?.resource),
  NotImplementedError: (params) => new NotImplementedError(params?.methodName),
};

export class ErrorFactory {
  static createError(type, params = {}) {
    const errorCreator = errorMap[type];
    if (errorCreator) {
      return errorCreator(params);
    }
    return new Error("Unknown error type");
  }
}
