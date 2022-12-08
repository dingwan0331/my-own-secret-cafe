import App from "./app.js";
import Config from "./config/index.js";
import { sequelize } from "./models.js";

const boostrap = async () => {
  const { NODE_ENV, SERVER_PORT } = new Config();

  const app = new App(NODE_ENV);

  await sequelize.sync({ force: false });

  app.createApp();

  app.listen(SERVER_PORT);
};

boostrap();
