export const ERROR_CODES = {
  AUTH_ERRORS: {
    USER_ALREADY_EXISTS: {
      message: "User already exists",
      statusCode: 409, // 409 Conflict
      code: "USER_ALREADY_EXISTS",
    },
    INVALID_CREDENTIALS: {
      message: "Invalid email or password",
      statusCode: 401, // 401 Unauthorized
      code: "INVALID_CREDENTIALS",
    },
  },
  RESOURCE_ERRORS: {
    NOT_FOUND: {
      message: "Resource not found",
      statusCode: 404, // 404 Not Found
      code: "NOT_FOUND",
    },
  },
  VALIDATION_ERRORS: {
    BAD_REQUEST: {
      message: "Bad request",
      statusCode: 400, // 400 Bad Request
      code: "BAD_REQUEST",
    },
  },
  GENERAL_ERRORS: {
    NOT_IMPLEMENTED: {
      message: "Not implemented",
      statusCode: 501, // 501 Not Implemented
      code: "NOT_IMPLEMENTED",
    },
  },
};
