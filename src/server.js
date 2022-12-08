import App from "./app.js";
import Config from "./config/index.js";

const boostrap = () => {
  const { NODE_ENV, SERVER_PORT } = new Config();

  const app = new App(NODE_ENV);

  app.createApp();

  app.listen(SERVER_PORT);
};

boostrap();
