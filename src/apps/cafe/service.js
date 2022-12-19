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

    const cafeRows = await this.cafeDao.getCafes(reqQuery, ATTRIBUTES);
    return { cafes: cafeRows };
  };

  getCafe = async (cafeId) => {
    const cafeRow = await this.cafeDao.getCafe(cafeId);
    return { cafes: cafeRow };
  };
}
