import AppError from "../../lib/appError.js";
import * as carService from "../cars/cars.service.js";
import * as database from "./position.database.js";

export async function setCarPosition(carId, position) {
  await carService.getCar(carId);
  await database.setCarCurrentPosition(carId, position);
  return database.addToPositionHistory(carId, position);
}

export async function getPositionsByCarId(carId) {
  await carService.getCar(carId);

  try {
    return await database.getPositionsByCarId(carId);
  } catch (error) {
    throw new AppError("BadQuery", 401, error.message);
  }
}
