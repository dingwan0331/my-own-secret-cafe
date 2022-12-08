class BaseHttpError extends Error {
  constructor(message) {
    this.status;
    this.message = message;
    this.isCustom = true;
  }
}

export class BadRequestError extends BaseHttpError {
  constructor() {
    this.status = 400;
  }
}

export class UnAuthrizedError extends BaseHttpError {
  constructor() {
    this.status = 401;
  }
}

export class ForbiddenError extends BaseHttpError {
  constructor() {
    this.status = 403;
  }
}

export class NotFoundError extends BaseHttpError {
  constructor() {
    this.status = 404;
  }
}
