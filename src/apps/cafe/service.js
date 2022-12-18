import { CafeDao } from "./dao.js";

export class CafeService {
  constructor() {
    this.cafeDao = new CafeDao();
  }

  getCafes = async (reqQuery) => {
    const ATTRIBUTES = [
      "id",
      "name",
      "priceOfAmericano",
      "openTime",
      "closeTime",
      "address",
      "latitude",
      "longtitude",
      "numberOfSocket",
      "isSeminaroom",
      "thumbnailUrl",
    ];

    return await this.cafeDao.getCafes(reqQuery, ATTRIBUTES);
  };

  getCafe = async (cafeId) => {
    return await this.cafeDao.getCafe(cafeId);
  };
}
