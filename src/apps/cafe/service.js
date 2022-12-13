import { CafeDao } from "./dao.js";

export class CafeService {
  constructor() {
    this.cafeDao = new CafeDao();
  }

  getCafes = async () => {
    return await this.cafeDao.getCafes();
  };
}
