// @ts-check

import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

const options = {
  definition: {
    openapi: "3.0.3",
    info: {
      title: "Spore-start",
      version: "1.0.0",
    },
    tags: [
      { name: "car", description: "Manage the cars" },
      { name: "user", description: "Manage the users' info" },
    ],
    servers: [{ url: "http://localhost:3000" }],
    components: {
      securitySchemes: {
        JWTAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT",
        },
      },
    },
    security: [{ JWTAuth: [] }],
  },
  apis: ["./src/components/**/*.router.js", "./src/components/**/*.model.js"],
};

const openApiSpec = swaggerJSDoc(options);
const openapi = [swaggerUi.serve, swaggerUi.setup(openApiSpec)];

export default openapi;
