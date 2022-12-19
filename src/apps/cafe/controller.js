import { checkCache } from "../../middlewares/check-cache.js";
import { redis } from "../../server.js";
import GetCafesDto from "./dto/get-cafes.dto.js";
import { CafeService } from "./service.js";

export class CafeController {
  constructor() {
    this.cafeService = new CafeService();
  }

  getCafes = async (req, res, next) => {
    try {
      const reqQuery = new GetCafesDto(req.query);
      const result = await this.cafeService.getCafes(reqQuery);

      await redis.set(req.originalUrl, JSON.stringify(result));

      res.status(200).json(result);
    } catch (err) {
      next(err);
    }
  };
  getCafe = async (req, res, next) => {
    try {
      const { cafeId } = req.params;
      const result = await this.cafeService.getCafe(cafeId);

      await redis.set(req.originalUrl, JSON.stringify(result));

      res.status(200).json(result);
    } catch (err) {
      next(err);
    }
  };

  createEndPoints = (router) => {
    router.get("", checkCache, this.getCafes);
    router.get("/:cafeId", checkCache, this.getCafe);

    return router;
  };
}
