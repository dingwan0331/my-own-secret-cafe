import { NextFunction, Request, Response } from "express";
import { HttpError } from "../utils/error";

export const responseError = (
  err: Error & HttpError,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { status, message, isCustom } = err;
  if (isCustom) {
    res.status(status).json({ message: message });
  } else {
    res.status(500).json({ message: "Server Error" });
  }
};
