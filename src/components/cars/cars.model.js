import sequelize from "../../lib/db.js";
import { DataTypes } from "sequelize";
import PositionModel from "../position/position.model.js";

/**
 * @swagger
 * components:
 *   schemas:
 *     Car:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           format: int32
 *           example: 45
 *         plate:
 *           type: string
 *           example: ATHK455
 *         createdAt:
 *           type: string
 *           example: 2023-08-09T17:31:22.182Z
 *         position:
 *           type: object
 *           properties:
 *             x:
 *               type: float
 *               example: 20.710429418405212
 *             y:
 *               type: float
 *               example: -103.40982443626814
 *
 */
const CarModel = sequelize.define("Car", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  plate: {
    type: DataTypes.STRING,
    comment: "Matricula",
    unique: "uniquePlate",
  },
  currentPosition: {
    type: "POINT",
    defaultValue: "(20.710429418405212, -103.40982443626814)",
    allowNull: false,
  },
});

CarModel.hasMany(PositionModel, {
  foreignKey: "carId",
});

export default CarModel;
