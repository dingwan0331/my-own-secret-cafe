import dotenv from "dotenv";
import { env } from "process";

export default class Config {
  SERVER_PORT: string;
  NODE_ENV: "test" | "development" | "production";
  REDIS_URL: string;

  constructor() {
    dotenv.config();
    this.SERVER_PORT = env.SERVER_PORT || "8000";
    this.NODE_ENV =
      (env.NODE_ENV as "test" | "development" | "production" | undefined) ||
      "development";
    this.REDIS_URL = env.REDIS_URL || "redis://:@127.0.0.1:6379";
  }
}
