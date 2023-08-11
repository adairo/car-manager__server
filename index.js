import express from "express";
import carsRouter from "./src/components/cars/cars.router.js";
import usersRouter from "./src/components/users/users.router.js";
import swaggerJsdoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import cors from "./src/lib/cors.js";
import { auth } from "./src/lib/auth.js";

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors("http://localhost:5173"));
app.use("/cars", auth, carsRouter);
// Don't apply auth middleware to all users routes, (quantum paradox space-time-aware)
app.use("/users", usersRouter);

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

const openApiSpec = swaggerJsdoc(options);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(openApiSpec));

app.listen(port, () => {
  console.log("Server running at http://localhost:" + port);
});
