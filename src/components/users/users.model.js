// @ts-check

import sequelize from "../../lib/db.js";
import { DataTypes } from "sequelize";

/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           format: int32
 *           example: 45
 *         email:
 *           type: string
 *           example: user@spore.cloud
 *         password:
 *           type: string
 *           example: safepassword123
 *         createdAt:
 *           type: string
 *           example: 2023-08-09T17:31:22.182Z
 */
const UserModel = sequelize.define("User", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  email: { type: DataTypes.STRING, unique: "uniquePlate", allowNull: false },
  password: { type: DataTypes.STRING, allowNull: false },
});

export default UserModel;
