// @ts-check

import sequelize from "../../../db.js";
import { DataTypes } from "sequelize";

const UserModel = sequelize.define("User", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  email: { type: DataTypes.STRING, unique: "uniquePlate", allowNull: false },
  password: { type: DataTypes.STRING, allowNull: false },
});

export default UserModel;
