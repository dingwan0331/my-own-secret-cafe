import swaggerUi from "swagger-ui-express";
import swaggerJsDoc from "swagger-jsdoc";

export default class Swagger {
  OPTION = {
    definition: {
      openapi: "3.0.0",
      info: {
        title: "my own secret cafe api",
        version: "0.0.0",
        description: "",
      },
      servers: [
        {
          url: "",
        },
      ],
    },
    apis: ["src/app.js", "src/apps/*/controller.js", "src/apps/*/dao.js"],
  };

  constructor() {
    this.serve = swaggerUi.serve;
  }

  setup = () => {
    const OPTION = swaggerJsDoc(this.OPTION);
    return swaggerUi.setup(OPTION, { explorer: true });
  };
}
