import sequelize from "../../../db.js";
import { DataTypes } from "sequelize";

const CarModel = sequelize.define(
  "Car",
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    plate: { type: DataTypes.STRING, comment: "Matricula" },
  },
);

export default CarModel;
