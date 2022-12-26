import { redis } from "../server.js";
import { NextFunction, Request, Response } from "express";

export const checkCache = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { originalUrl } = req;
    const cache = JSON.parse(await redis.get(originalUrl));

    if (cache) {
      res.status(200).json(cache);
    }
    if (!cache) {
      next();
    }
  } catch (err) {
    next(err);
  }
};
