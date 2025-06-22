class ApiError extends Error {
  constructor(
    statusCode,
    message = "Something went wrong",
    errors = [],
    stack = "",
    options = {},
  ) {
    super(message);
    this.statusCode = statusCode;
    this.data = options.data ?? null;
    this.success = options.sucess ?? false;
    this.errors = errors;

    if (stack) {
      this.stack = stack;
    } else {
      Error.captureStackTrace(this, this.constructor);
    }
  }
}

export { ApiError };
