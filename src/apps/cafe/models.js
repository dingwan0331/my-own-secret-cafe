import { Sequelize } from "sequelize";

export class Cafe extends Sequelize.models {
  static init(sequelize) {
    return super.init(
      {
        id: {
          type: Sequelize.BIGINT.UNSIGNED,
          allowNull: false,
          primaryKey: true,
          autoIncrement: true,
        },

        name: { type: Sequelize.STRING(20), allowNull: false },
        description: { type: Sequelize.STRING(200), allowNull: false },
        priceOfAmericano: {
          type: Sequelize.Integer.UNSIGNED,
          allowNull: false,
        },

        // 오픈, 마감시간 24시 일시 둘다 0000
        openTime: { type: Sequelize.Integer.UNSIGNED, allowNull: false },
        closedTime: { type: Sequelize.Integer.UNSIGNED, allowNull: false },

        //주소 관련
        address: { type: Sequelize.STRING(30), allowNull: false },
        latitude: { type: Sequelize.Decimal(13, 10), allowNull: false },
        longtude: { type: Sequelize.Decimal(13, 10), allowNull: false },

        numberOfSocket: {
          type: Sequelize.ENUM("0~5", "6~10", "11~15", "16~"),
          allowNull: false,
          default: "0~5",
        },
        isSeminaroom: {
          type: Sequelize.Boolean,
          allowNull: false,
          default: false,
        },

        // 사용할 이미지들
        entranceImageUrl: { type: Sequelize.STRING(200), allowNull: false },
        wifiImageUrl: { type: Sequelize.STRING(200), allowNull: true },
        menuImageUrl: { type: Sequelize.STRING(200), allowNull: true },
      },
      {
        sequelize,
        timestamps: true,
        modelName: "Cafe",
        tableName: "cafes",
        paranoid: false,
        underscored: true,
        charset: "utf8",
        collate: "utf8_general_ci",
      }
    );
  }
}
