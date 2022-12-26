export interface HttpError {
  isCustom: boolean;
  message: string;
  status: number;
}
class BaseHttpError extends Error {
  protected isCustom: boolean;
  protected status: number;

  constructor(message: string) {
    super();
    this.message = message;
    this.isCustom = true;
    this.status = 500;
  }
}

export class BadRequestError extends BaseHttpError {
  constructor(message: string) {
    super(message);
    this.status = 400;
    this.message = message;
  }
}

export class UnAuthrizedError extends BaseHttpError {
  constructor(message: string) {
    super(message);
    this.status = 401;
    this.message = message;
  }
}

export class ForbiddenError extends BaseHttpError {
  constructor(message: string) {
    super(message);
    this.status = 403;
    this.message = message;
  }
}

export class NotFoundError extends BaseHttpError {
  constructor(message = "Not Found Url") {
    super(message);
    this.status = 404;
    this.message = "Not Found Url";
  }
}
