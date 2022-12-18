import { checkCache } from "../../middlewares/check-cache.js";
import GetCafesDto from "./dto/get-cafes.dto.js";
import { CafeService } from "./service.js";

export class CafeController {
  constructor() {
    this.cafeService = new CafeService();
  }

  getCafes = async (req, res, next) => {
    try {
      const reqQuery = new GetCafesDto(req.query);

      res.status(200).json(await this.cafeService.getCafes(reqQuery));
    } catch (err) {
      next(err);
    }
  };
  getCafe = async (req, res, next) => {
    try {
      const { cafeId } = req.params;

      res.status(200).json(await this.cafeService.getCafe(cafeId));
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
