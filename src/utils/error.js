class BaseHttpError extends Error {
  constructor(message) {
    super();
    this.message = message;
    this.isCustom = true;
  }
}

export class BadRequestError extends BaseHttpError {
  constructor(message) {
    super(message);
    this.status = 400;
    this.message = message;
  }
}

export class UnAuthrizedError extends BaseHttpError {
  constructor(message) {
    super(message);
    this.status = 401;
    this.message = message;
  }
}

export class ForbiddenError extends BaseHttpError {
  constructor(message) {
    super(message);
    this.status = 403;
    this.message = message;
  }
}

export class NotFoundError extends BaseHttpError {
  constructor() {
    super();
    this.status = 404;
    this.message = "Not Found Url";
  }
}
