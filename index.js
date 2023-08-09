import express from "express";
import carsRouter from "./src/components/cars/cars.router.js";
import usersRouter from "./src/components/users/users.router.js";
import swaggerJsdoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

const app = express();
const port = 3000;

app.use(express.json());
app.use("/cars", carsRouter);
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
  },
  apis: ["./src/components/**/*.router.js", "./src/components/**/*.model.js"],
};

const openApiSpec = swaggerJsdoc(options);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(openApiSpec));

app.listen(port, () => {
  console.log("Server running at http://localhost:" + port);
});
