import { Cafe, CafeImage, Region } from "./models.js";

export class CafeDao {
  constructor() {
    this.cafe = Cafe;
  }
  /**
   * @swagger
   * components:
   *  schemas:
   *    Cafes:
   *      type: object
   *      properties:
   *        id:
   *          type: integer
   *          minimum: 1
   *          description: DB 자동증가 pk값
   *        name:
   *          type: string
   *          description: 카페이름
   *        priceOfAmericano:
   *          type: integer
   *          minimum: 1500
   *          description: 아메리카노 기본사이즈 가격
   *        openTime:
   *          type: integer
   *          description: 오픈 시간 0000 or 0 일때 24시간로 간주됌
   *        closeTime:
   *          type: integer
   *          description: 마감 시간 8888 일때 24시간로 간주됌
   *        address:
   *          type: string
   *          description: 카페 주소
   *        latitude:
   *          type: number
   *          format: float
   *          description: 지도 사용시 필요한 위도
   *        longtitude:
   *          type: number
   *          format: float
   *          description: 지도 사용시 필요한 경도
   *        numberOfSocket:
   *          type: strig
   *          enum: [0~5, 6~10, 11~15, 16~]
   *          description: 카페에 사용가능한 콘센트 갯수
   *        isSeminaroom:
   *          type: boolean
   *          description: 세미나룸 혹은 커뮤니티룸같은 단체석 보유여부
   *        thumbnailUrl:
   *          type: string
   *          format: uri
   *          description: s3 썸네일 주소
   */
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
