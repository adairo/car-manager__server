import sequelize from "../../lib/db.js";
import { DataTypes } from "sequelize";

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
 */
const CarModel = sequelize.define("Car", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  plate: {
    type: DataTypes.STRING,
    comment: "Matricula",
    unique: "uniquePlate",
  },
});

export default CarModel;
