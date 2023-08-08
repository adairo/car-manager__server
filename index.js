import express from "express";
import carsRouter from "./src/components/cars/cars.router.js";
import usersRouter from "./src/components/users/users.router.js";
const app = express();
const port = 3000;

app.use(express.json());
app.use("/cars", carsRouter);
app.use("/users", usersRouter);

app.listen(port, () => {
  console.log("Server running at http://localhost:" + port);
});
