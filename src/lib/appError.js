// @ts-check

class AppError extends Error {
  constructor(name, httpCode, description) {
    super(description);
    this.name = name;
    this.httpCode = httpCode;
  }
}

export default AppError;
