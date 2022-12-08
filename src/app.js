import express from "express";
import cors from "cors";
import morgan from "morgan";
import { responseError } from "./middlewares/response-error.js";

export default class App {
  constructor(NODE_ENV) {
    this.app = express();
    this.router = express.Router();
    this.NODE_ENV = NODE_ENV;
  }
  createApp() {
    const app = this.app;

    this.setReqMiddleware(app);
    this.setRouter(app);
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

  setRouter(app) {
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
