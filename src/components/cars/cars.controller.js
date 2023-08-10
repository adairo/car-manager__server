// @ts-check

import AppError from "../../lib/appError.js";
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
    if (error instanceof AppError) {
      return res.status(error.httpCode).json({ error: error.message });
    }

    throw error;
  }
}

export async function updateCar(req, res) {
  const carData = req.body;
  const carId = req.params.carId;
  try {
    const updatedCar = await service.updateCar(carId, carData);
    res.status(200).send(updatedCar);
  } catch (error) {
    if (error instanceof AppError) {
      return res.status(error.httpCode).json({ error: error.message });
    }

    throw error;
  }
}

export async function updatePosition(req, res) {}

export async function registerCar(req, res) {
  const plate = req.body.plate;
  try {
    const car = await service.registerCar(plate);
    res.status(201).send(car.toJSON());
  } catch (error) {
    if (error instanceof AppError) {
      return res.status(error.httpCode).json({ error: error.message });
    }

    throw error;
  }
}

export async function deleteCar(req, res) {
  const carId = req.params.carId;

  try {
    await service.deleteCar(carId);
    res.status(200).end();
  } catch (error) {
    if (error instanceof AppError) {
      return res.status(error.httpCode).json({ error: error.message });
    }

    throw error;
  }
}
