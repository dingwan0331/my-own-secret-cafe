import { Cafe } from "./models.js";

export class CafeDao {
  constructor() {
    this.cafe = Cafe;
  }

  getCafes = async () => {
    return await this.cafe.findAll();
  };
}
