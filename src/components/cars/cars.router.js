// @ts-check

import express from "express";
import * as controller from "./cars.controller.js"

const carsRouter = express.Router();

carsRouter.get("/", controller.getAllCars);

carsRouter.get("/:carId", (_req, res) => {
  res.send("Get a single car");
});

carsRouter.post("/", controller.registerCar);

carsRouter.put("/:carId", (_req, res) => {
  res.send("Replace a car");
});

carsRouter.patch("/:carId", (_req, res) => {
  res.send("Updating a car");
});

export default carsRouter;
