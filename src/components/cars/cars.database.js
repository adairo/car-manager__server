import CarModel from "./cars.model.js";

export function registerCar(plate) {
  return CarModel.create({ plate });
}

export function getAllCars() {
  return CarModel.findAll({ attributes: ["id", "plate"] });
}

export function getCar(carId) {
  return CarModel.findByPk(carId, {attributes: ["id", "plate", "createdAt"]})
}

export function updateCar(id, plate) {
  return CarModel.update(
    {
      plate,
    },
    { where: id }
  );
}

export function deleteCar(id) {
  return CarModel.destroy({ where: { id } });
}
