import { Sequelize } from "sequelize";

export class Review extends Sequelize.models {
  static init(sequelize) {
    return super.init(
      {
        id: {
          type: Sequelize.BIGINT.UNSIGNED,
          allowNull: false,
          primaryKey: true,
          autoIncrement: true,
        },
        url: {
          type: Sequelize.STRING(200),
          allowNull: false,
        },
      },
      {
        sequelize,
        timestamps: true,
        modelName: "Review",
        tableName: "reviews",
        paranoid: true,
        underscored: true,
        charset: "utf8",
        collate: "utf8_general_ci",
      }
    );
  }
}
