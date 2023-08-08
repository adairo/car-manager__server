// @ts-check

import * as database from "./cars.database.js";

export function getAllCars() {
  return database.getAllCars();
}

export async function getCar(carId) {
  // returns null when no car was found
  const car = await database.getCar(carId);
  if (!car) {
    throw new Error("Invalid car id");
  }

  return car;
}

// should we first check that the car exists?
export async function updateCar(carId, carData) {
  const _carToUpdate = await getCar(carId);
  return database.updateCar(carId, carData);
}

export async function deleteCar(carId) {
  const _carToDelete = await getCar(carId);
  return database.deleteCar(carId);
}

export async function registerCar(plate) {
  return database.registerCar(plate);
}
