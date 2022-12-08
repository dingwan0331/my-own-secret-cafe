import { env } from "process";
import Sequelize from "sequelize";
import Config from "./config/sequelize.js";

const environment = env.NODE_ENV;
const databaseConfig = Config[environment];

const sequelize = new Sequelize(
  databaseConfig.database,
  databaseConfig.username,
  databaseConfig.password,
  databaseConfig
);

Object.values(sequelize.models).forEach((model) => {
  if (model.associate) {
    model.associate(sequelize.models);
  }
});

export { sequelize };
