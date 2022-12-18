import { Cafe, CafeImage, Region } from "./models.js";

export class CafeDao {
  constructor() {
    this.cafe = Cafe;
  }

  getCafes = async (reqQuery, ATTRIBUTES) => {
    const { offset, limit, region, orderBy } = reqQuery;
    let queryOptions = {};

    if (region.length == 0) {
      queryOptions = {
        attributes: ATTRIBUTES,
        offset,
        limit,
        order: orderBy,
        include: { model: Region },
      };
    } else {
      queryOptions = {
        attributes: ATTRIBUTES,
        offset,
        limit,
        order: orderBy,
        include: { model: Region },
        where: { region_id: region },
      };
    }

    return await this.cafe.findAll(queryOptions);
  };
  getCafe = async (cafeId) => {
    return await this.cafe.findByPk(cafeId, {
      include: [
        { model: Region },
        { model: CafeImage, attributes: ["id", "url"] },
      ],
    });
  };
}
