import App from "./app.js";
import Config from "./config/index.js";
import { sequelize } from "./models.js";
import Redis from "./utils/redis.js";

let redis;

const boostrap = async () => {
  try {
    const { NODE_ENV, SERVER_PORT, REDIS_URL } = new Config();

    const app = new App(NODE_ENV);

    // sequelize connect
    await sequelize.sync({ force: false });

    // redis connect
    redis = new Redis(REDIS_URL);
    await redis.connect();
    redis = redis.v4;

    app.createApp();
    app.listen(SERVER_PORT);
  } catch (err) {
    console.error(err);
  }
};

boostrap();

export { redis };
