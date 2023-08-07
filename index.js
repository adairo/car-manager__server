

import express from "express";
import carsRouter from "./src/components/cars/cars.router.js";
const app = express();
const port = 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.use("/cars", carsRouter)

app.listen(port, () => {
  console.log("Server running at http://localhost:" + port);
});
