import dotenv from "dotenv";
import { env } from "process";

export default class Config {
  constructor() {
    dotenv.config();
  }

  SERVER_PORT = env.SERVER_PORT || 8000;
  NODE_ENV = env.NODE_ENV;
  REDIS_URL = env.REDIS_URL;
}
