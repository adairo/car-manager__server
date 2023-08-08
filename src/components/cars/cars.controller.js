// @ts-check

import * as service from "./cars.service.js";

export async function getAllCars(req, res) {
  const cars = await service.getAllCars();
  res.status(200).send(cars);
}

export async function getCar(req, res) {
  try {
    const car = await service.getCar(req.params.carId);
    res.status(200).send(car);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

export async function registerCar(req, res) {
  const plate = req.body.plate;
  const car = await service.registerCar(plate);
  res.status(201).send(car.toJSON());
}
