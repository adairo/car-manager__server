import * as service from "./cars.service.js";

export async function getAllCars(req, res) {
  const cars = await service.getAllCars();
  res.status(200).send(cars);
}
