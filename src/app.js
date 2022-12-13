import express from "express";
import cors from "cors";
import morgan from "morgan";
import { responseError } from "./middlewares/response-error.js";
import { CafeController } from "./apps/cafe/controller.js";

export default class App {
  constructor(NODE_ENV) {
    this.app = express();
    this.router = express.Router();

    this.NODE_ENV = NODE_ENV;

    this.cafeController = new CafeController();
  }

  createApp() {
    const app = this.app;
    const router = this.router;

    this.setReqMiddleware(app);
    this.setRouter(app, router);
    this.setResMiddleware(app);

    this.app = app;
  }

  setReqMiddleware(app) {
    app.use(cors());
    app.use(express.json());

    if (this.NODE_ENV === "development") {
      app.use(morgan("dev"));
    }

    return app;
  }

  setRouter(app, router) {
    this.cafeController.createEndPoints(app, router);
    return app;
  }

  setResMiddleware(app) {
    app.use(responseError);
    return app;
  }

  listen(SERVER_PORT) {
    this.app.listen(SERVER_PORT);
    console.log(`server listen on ${SERVER_PORT}`);
    return;
  }
}
