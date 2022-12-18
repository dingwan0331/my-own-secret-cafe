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
      const cafeRows = await this.cafeService.getCafes(reqQuery);
      const result = { cafes: cafeRows };

      await redis.set(req.originalUrl, JSON.stringify(result));

      res.status(200).json(result);
    } catch (err) {
      next(err);
    }
  };
  getCafe = async (req, res, next) => {
    try {
      const { cafeId } = req.params;
      const cafeRow = await this.cafeService.getCafe(cafeId);
      const result = { cafe: cafeRow };

      await redis.set(req.originalUrl, JSON.stringify(result));

      res.status(200).json(result);
    } catch (err) {
      next(err);
    }
  };

  createEndPoints = (app, router) => {
    router.get("", checkCache, this.getCafes);
    router.get("/:cafeId", checkCache, this.getCafe);

    app.use("/cafes", router);

    return app;
  };
}
