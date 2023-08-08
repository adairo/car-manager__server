import sequelize from "../../../db.js";
import { DataTypes } from "sequelize";

const CarModel = sequelize.define(
  "Car",
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    plate: { type: DataTypes.STRING, comment: "Matrícula", unique: true },
  },
);

export default CarModel;
