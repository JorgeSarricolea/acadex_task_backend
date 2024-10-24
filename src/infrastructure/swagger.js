import swaggerUi from "swagger-ui-express";
import swaggerJsDoc from "swagger-jsdoc";

const swaggerOptions = {
  swaggerDefinition: {
    openapi: "3.0.0",
    info: {
      title: "Acadex API",
      version: "1.0.0",
      description: "API documentation of endpoints",
    },
    servers: [],
  },
  apis: ["./src/infrastructure/routes/*.js"],
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);

export { swaggerUi, swaggerDocs };
