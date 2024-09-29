export const ERROR_CODES = {
  USER_ALREADY_EXISTS: {
    message: "User already exists",
    statusCode: 409, // 409 Conflict
  },
  INVALID_CREDENTIALS: {
    message: "Invalid email or password",
    statusCode: 401, // 401 Unauthorized
  },
  NOT_FOUND: {
    message: "Resource not found",
    statusCode: 404, // 404 Not Found
  },
  BAD_REQUEST: {
    message: "Bad request",
    statusCode: 400, // 400 Bad Request
  },
};
