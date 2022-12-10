import { env } from "process";
import Sequelize from "sequelize";
import Config from "./config/sequelize.js";

import * as cafeModels from "./apps/cafe/models.js";
import * as reviewModels from "./apps/review/models.js";

const environment = env.NODE_ENV;
const databaseConfig = Config[environment];

const sequelize = new Sequelize(
  databaseConfig.database,
  databaseConfig.username,
  databaseConfig.password,
  databaseConfig
);

Object.values(cafeModels).forEach((model) => {
  sequelize[model] = model;
  model.init(sequelize);
});

Object.values(reviewModels).forEach((model) => {
  sequelize[model] = model;
  model.init(sequelize);
});

Object.values(sequelize.models).forEach((model) => {
  if (model.associate) {
    model.associate(sequelize.models);
  }
});

export { sequelize };
