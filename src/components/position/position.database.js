import CarModel from "../cars/cars.model.js";
import PositionModel from "./position.model.js";

function formatPosition(position) {
  return `(${position.lattitude}, ${position.longitude})`;
}

export async function addToPositionHistory(carId, position) {
  return PositionModel.create({
    carId: carId,
    position: formatPosition(position),
  });
}

export async function setCarCurrentPosition(carId, position) {
  return CarModel.update(
    {
      currentPosition: formatPosition(position),
    },
    {
      where: {
        id: carId,
      },
    },
  );
}

export async function getPositionsByCarId(carId) {
  return PositionModel.findAll({
    where: {
      carId: carId,
    },
    order: [["timestamp", "DESC"]],
  });
}
