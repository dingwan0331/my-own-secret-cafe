import { checkCache } from "../../middlewares/check-cache";
import { redis } from "../../server.js";
import GetCafesDto from "./dto/get-cafes.dto.js";
import { CafeService } from "./service.js";

export class CafeController {
  constructor() {
    this.cafeService = new CafeService();
  }

  getCafes = async (req, res, next) => {
    try {
      const reqQuery = new GetCafesDto(req.query);
      const result = await this.cafeService.getCafes(reqQuery);

      await redis.set(req.originalUrl, JSON.stringify(result));

      res.status(200).json(result);
    } catch (err) {
      next(err);
    }
  };
  getCafe = async (req, res, next) => {
    try {
      const { cafeId } = req.params;
      const result = await this.cafeService.getCafe(cafeId);

      await redis.set(req.originalUrl, JSON.stringify(result));

      res.status(200).json(result);
    } catch (err) {
      next(err);
    }
  };

  createEndPoints = (router) => {
    /**
     * @swagger
     * paths:
     *   /api/cafes:
     *     get:
     *       summary: get cafes
     *       tags: [Cafes]
     *       parameters:
     *        - in: query
     *          name: offset
     *          description: default = 0
     *          required: false
     *        - in: query
     *          name: limit
     *          description: default = 10
     *          required: false
     *        - in: query
     *          name: region
     *          description: 필터링에 필요한 지역id
     *          required: false
     *        - in: query
     *          name: order
     *          description: closetime-desc, opentime-asc 두가지만 지원
     *          required: false
     *       responses:
     *         "200":
     *           description:
     *           content:
     *             application/json:
     *              schema:
     *                type: object
     *                properties:
     *                  cafes:
     *                    type: array
     *                    items:
     *                      $ref: '#/components/schemas/Cafes'
     *                    minItems: 10
     */
    router.get("", checkCache, this.getCafes);
    /**
     * @swagger
     * paths:
     *   /api/cafes/{cafeId}:
     *     get:
     *       summary: get cafe
     *       tags: [Cafes]
     *       responses:
     *         "200":
     *           description:
     *           content:
     *             application/json:
     *              schema:
     *                type: object
     *                properties:
     *                  cafe:
     *                    $ref: '#/components/schemas/Cafe'
     */
    router.get("/:cafeId", checkCache, this.getCafe);

    return router;
  };
}
