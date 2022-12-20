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
   *          description: 아메리카노 기본사이즈 가격
   *        openTime:
   *          type: integer
   *          description: 오픈 시간 0000 or 0 일때 24시간으로 간주됌
   *        closeTime:
   *          type: integer
   *          description: 마감 시간 8888 일때 24시간으로 간주됌
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
   *        Region:
   *          type: object
   *          properties:
   *            id:
   *              type: integer
   *              minimum: 1
   *              description: DB 자동증가 pk값
   *            name:
   *              type: string
   *              descripttion: 지역이름
   */
  getCafes = async (reqQuery, ATTRIBUTES) => {
    const { offset, limit, region, order } = reqQuery;
    let queryOptions = {};

    if (region.length == 0) {
      queryOptions = {
        attributes: ATTRIBUTES,
        offset,
        limit,
        order,
        include: { model: Region },
      };
    } else {
      queryOptions = {
        attributes: ATTRIBUTES,
        offset,
        limit,
        order,
        include: { model: Region },
        where: { region_id: region },
      };
    }

    return await this.cafe.findAll(queryOptions);
  };

  /**
   * @swagger
   * components:
   *  schemas:
   *    Cafe:
   *      type: object
   *      properties:
   *        id:
   *          type: integer
   *          description: DB 자동증가 pk값
   *          example: 1
   *        name:
   *          type: string
   *          description: 카페이름
   *        description:
   *          type: string
   *          description: 카페 상세 설명
   *        priceOfAmericano:
   *          type: integer
   *          description: 아메리카노 기본사이즈 가격
   *          example: 3000
   *        openTime:
   *          type: integer
   *          description: 오픈 시간 0일때 24시간로 간주됌
   *          example: 0900
   *        closeTime:
   *          type: integer
   *          description: 마감 시간 8888 일때 24시간로 간주됌
   *          example: 2300
   *        address:
   *          type: string
   *          description: 카페 주소
   *          example: 서울특별시 동작구 노량진동 121-1
   *        latitude:
   *          type: number
   *          format: float
   *          description: 지도 사용시 필요한 위도
   *          example: 12.1491829381932
   *        longtitude:
   *          type: number
   *          format: float
   *          description: 지도 사용시 필요한 경도
   *          example: 12.1491829381932
   *        numberOfSocket:
   *          type: strig
   *          enum: [0~5, 6~10, 11~15, 16~]
   *          description: 카페에 사용가능한 콘센트 갯수
   *        isSeminaroom:
   *          type: boolean
   *          description: 세미나룸 혹은 커뮤니티룸같은 단체석 보유여부
   *
   *        mainImageUrl:
   *          type: string
   *          format: uri
   *          description: s3 메인사진 url
   *          example: www.ksf.com/2133231
   *        wifiImageUrl:
   *          type: string
   *          format: uri
   *          description: s3 와이파이사진 url
   *          example: www.ksf.com/2133231
   *        createdAt:
   *          type: string
   *          format: date
   *          description: 게시물 작성시간
   *          example: 2022-12-18T05:34:37.000Z,
   *        updatedAt:
   *          type: string
   *          format: date
   *          description: 최근 수정시간
   *          example: 2022-12-18T05:34:37.000Z,
   *        Region:
   *          type: object
   *          properties:
   *            id:
   *              type: integer
   *              description: DB 자동증가 pk값
   *              example: 1
   *            name:
   *              type: string
   *              descripttion: 지역이름
   *              example: 노량진
   *        CafeImages:
   *          type: array
   *          itmes:
   *            type: object
   *            properties:
   *              id:
   *                type: integer
   *                description: DB 자동증가 pk값
   *                example: 1
   *              url:
   *                type: string
   *                descripttion:  s3 이미지 주소
   *                example: www.ksf.com/2133231
   */
  getCafe = async (cafeId) => {
    return await this.cafe.findByPk(cafeId, {
      include: [
        { model: Region },
        { model: CafeImage, attributes: ["id", "url"] },
      ],
    });
  };
}
