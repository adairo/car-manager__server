import CarModel from "./cars.model.js";

export function registerCar(payload) {
  return CarModel.create(
    { ...payload, position: formatPosition(payload.position) },
    { returning: true },
  );
}

export function getAllCars() {
  return CarModel.findAll({
    attributes: ["id", "plate", "position", "createdAt"],
  });
}

export function getCarById(carId) {
  return CarModel.findByPk(carId, {
    attributes: ["id", "plate", "createdAt", "position"],
  });
}

export function getCarByPlate(plate) {
  return CarModel.findOne({ where: { plate } });
}

export async function updateCar(carId, carData) {
  const [_affectedRows, [updatedCar]] = await CarModel.update(carData, {
    where: { id: carId },
    returning: true,
  });
  return updatedCar;
}

function formatPosition(position) {
  return `(${position.lattitude}, ${position.longitude})`;
}

export async function updatePosition(carId, position) {
  const [_affectedRows, [updatedCar]] = await CarModel.update(
    { position: formatPosition(position) },
    {
      where: { id: carId },
      returning: ["id", "position"],
    },
  );
  return updatedCar;
}

export function deleteCar(id) {
  return CarModel.destroy({ where: { id } });
}
