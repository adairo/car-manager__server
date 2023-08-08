import * as database from "./cars.database.js";

export function getAllCars() {
  return database.getAllCars();
}

export async function registerCar(plate) {
  return database.registerCar(plate);
}
