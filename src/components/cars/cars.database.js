// import sequelize from "../../../db.js";
import CarModel from "./cars.model.js";


export function registerCar(plate) {
  return CarModel.create({ plate });
}

export function getAllCars() {
  return CarModel.findAll({ attributes: ["id", "plate"] });
}

export function getCar(id) {
  return CarModel.findAll({
    where: {
      id,
    },
    attributes: ["id", "plate"],
  });
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
