// @ts-check

import express from "express";

const carsRouter = express.Router();

carsRouter.get("/", (_req, res) => {
  res.send("Getting all cars");
});

carsRouter.get("/:carId", (_req, res) => {
  res.send("Get a single car");
});

carsRouter.post("/", (_req, res) => {
  res.send("Creating a new car");
});

carsRouter.put("/:carId", (_req, res) => {
  res.send("Replace a car");
});

carsRouter.patch("/:carId", (_req, res) => {
  res.send("Updating a car");
});

export default carsRouter;
