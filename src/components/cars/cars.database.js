import CarModel from "./cars.model.js";

export function registerCar(plate) {
  return CarModel.create({ plate });
}

export function getAllCars() {
  return CarModel.findAll({ attributes: ["id", "plate"] });
}

export function getCar(carId) {
  return CarModel.findByPk(carId, { attributes: ["id", "plate", "createdAt"] });
}

export async function updateCar(carId, carData) {
  const [_affectedRows, [updatedCar]] = await CarModel.update(carData, {
    where: { id: carId },
    returning: ["id", "plate"],
  });
  return updatedCar;
}

export function deleteCar(id) {
  return CarModel.destroy({ where: { id } });
}
