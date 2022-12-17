export default class GetCafesDto {
  constructor({ offset = 0, limit = 10, orderBy = "", region = "[]" }) {
    this.offset = offset;
    this.limit = limit;
    this.orderBy = orderBy;
    this.region = JSON.parse(region);
  }
}
