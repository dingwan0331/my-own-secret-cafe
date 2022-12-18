import { redis } from "../server.js";

export const checkCache = (req, res, next) => {
  try {
    const { originalUrl } = req;
    const cache = redis.get(originalUrl);

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
