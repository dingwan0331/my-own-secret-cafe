import App from "./app.js";
import Config from "./config/index.js";
import { sequelize } from "./models.js";
import Redis from "./utils/redis.js";

const config = new Config();
const app = new App(config.NODE_ENV);
const redis = new Redis(config.REDIS_URL);

const boostrap = async () => {
  try {
    await sequelize.sync({ force: false });

    await redis.connect();

    app.createApp();

    app.listen(config.SERVER_PORT);
  } catch (err) {
    console.error(err);
  }
};

boostrap();

export { redis };
