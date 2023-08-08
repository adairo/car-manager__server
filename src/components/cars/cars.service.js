// @ts-check

import * as database from "./cars.database.js";

export function getAllCars() {
  return database.getAllCars();
}

export async function getCar(carId) {
  const car = await database.getCar(carId)
  if (!car) {
    throw new Error("No se encontró el auto con ese id")
  }

  return car;
}

// should we first check that the car exists? 
export async function updateCar(carId, carData) {
  return database.updateCar(carId, carData)
}

export async function registerCar(plate) {
  return database.registerCar(plate);
}
