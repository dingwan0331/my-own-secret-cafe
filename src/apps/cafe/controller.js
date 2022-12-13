import { CafeService } from "./service.js";

export class CafeController {
  constructor() {
    this.cafeService = new CafeService();
  }

  getCafes = async (req, res, next) => {
    try {
      res.status(200).json(await this.cafeService.getCafes());
    } catch (err) {
      next(err);
    }
  };

  createEndPoints = (app, router) => {
    router.get("", this.getCafes);

    app.use("/cafes", router);

    return app;
  };
}
