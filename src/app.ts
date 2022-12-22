import express from "express";
import { Application, Router } from "express";
import cors from "cors";
import morgan from "morgan";
import { responseError } from "./middlewares/response-error.js";
import { CafeController } from "./apps/cafe/controller.js";
import Swagger from "./swagger/swagger.js";

export default class App {
  public app: Application;
  public nodeEnv: "test" | "development" | "production";

  constructor(nodeEnv: "test" | "development" | "production") {
    (this.app = express()), (this.nodeEnv = nodeEnv);
  }

  readonly createApp = () => {
    const app = this.app;

    this.setReqMiddleware(app);
    this.setRouter(app);
    this.setResMiddleware(app);
  };

  private setReqMiddleware(app: Application): Application {
    app.use(cors());
    app.use(express.json());

    if (this.nodeEnv === "development") {
      app.use(morgan("dev"));
    }

    return app;
  }

  private setRouter(app: Application, router = Router()): Application {
    const swagger = new Swagger();

    let cafeRouter = Router();
    new CafeController().createEndPoints(cafeRouter);

    /**
     * @swagger
     * tags:
     *  name: Cafes
     *  description: Cafes api
     */
    router.use("/cafes", cafeRouter);

    router.use("/docs", swagger.serve, swagger.setup());

    app.use("/api", router);
    return app;
  }

  private setResMiddleware(app: Application): Application {
    app.use(responseError);

    return app;
  }

  listen(SERVER_PORT: number | string): void {
    this.app.listen(SERVER_PORT);

    console.log(`server listen on ${SERVER_PORT}`);
  }
}
