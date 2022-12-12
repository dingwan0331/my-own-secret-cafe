import { Sequelize } from "sequelize";

export class Review extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        id: {
          type: Sequelize.BIGINT.UNSIGNED,
          allowNull: false,
          primaryKey: true,
          autoIncrement: true,
        },
        description: {
          type: Sequelize.STRING(200),
          allowNull: false,
        },
        rating: {
          type: Sequelize.INTEGER.UNSIGNED,
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

  static associate(models) {
    this.belongsTo(models.Cafe, { foreignKey: { allowNull: false } });
    this.hasMany(models.ReviewImage, {
      foreignKey: { name: "reviewId", allowNull: false },
      sourceKey: "id",
      onDelete: "cascade",
    });
  }
}

export class ReviewImage extends Sequelize.Model {
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
        modelName: "ReviewImage",
        tableName: "review_images",
        paranoid: true,
        underscored: true,
        charset: "utf8",
        collate: "utf8_general_ci",
      }
    );
  }

  static associate(models) {
    this.belongsTo(models.Review, { foreignKey: { allowNull: false } });
  }
}
