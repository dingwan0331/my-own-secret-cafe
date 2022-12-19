export default class GetCafesDto {
  orderBySet = {
    "closetime-desc": [["closeTime", "DESC"]],
    "opentime-asc": [["openTime", "ASC"]],
  };
  /**
   * @swagger
   */
  constructor({
    offset = 0,
    limit = 10,
    order = "closetime-desc",
    region = "[]",
  }) {
    this.offset = offset;
    this.limit = limit;
    this.order = this.orderBySet[order];
    this.region = JSON.parse(region);
  }
}
