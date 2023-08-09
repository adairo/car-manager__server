// @ts-check

import AppError from "../../lib/appError.js";
import * as database from "./cars.database.js";

export function getAllCars() {
  return database.getAllCars();
}

export async function getCar(carId) {
  // returns null when no car was found
  const car = await database.getCarById(carId);
  if (!car) {
    throw new AppError("ObjectDoesNotExist", 400, "Car does not exist");
  }

  return car;
}

export async function updateCar(carId, carData) {
  await getCar(carId); // just to validate the car exists
  return database.updateCar(carId, carData);
}

export async function deleteCar(carId) {
  await getCar(carId);
  return database.deleteCar(carId);
}

export async function registerCar(plate) {
  const isPlateAlreadyRegistered = !!(await database.getCarByPlate(plate)); // cast to boolean
  if (isPlateAlreadyRegistered) {
    throw new AppError("DuplicatedPlate", 400, "Plate already registered");
  }
  return database.registerCar(plate);
}
