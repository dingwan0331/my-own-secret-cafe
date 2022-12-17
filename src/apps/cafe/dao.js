import { Cafe, Region } from "./models.js";

export class CafeDao {
  constructor() {
    this.cafe = Cafe;
  }

  getCafes = async (reqQuery, ATTRIBUTES) => {
    const { offset, limit, region } = reqQuery;
    let queryOptions = {};

    if (region.length == 0) {
      queryOptions = {
        attributes: ATTRIBUTES,
        offset,
        limit,
        include: { model: Region },
      };
    } else {
      queryOptions = {
        attributes: ATTRIBUTES,
        offset,
        limit,
        include: { model: Region },
        where: { region_id: region },
      };
    }

    return await this.cafe.findAll(queryOptions);
  };
}
