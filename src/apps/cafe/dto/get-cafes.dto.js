export default class GetCafesDto {
  orderBySet = {
    "closetime-desc": [["closeTime", "DESC"]],
    "opentime-asc": [["openTime", "ASC"]],
  };

  constructor({
    offset = 0,
    limit = 10,
    orderBy = "closetime-desc",
    region = "[]",
  }) {
    this.offset = offset;
    this.limit = limit;
    this.orderBy = this.orderBySet[orderBy];
    this.region = JSON.parse(region);
  }
}
