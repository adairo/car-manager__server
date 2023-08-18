import { DataTypes } from "sequelize";
import sequelize from "../../lib/db.js";

const PositionModel = sequelize.define(
  "Position",
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    position: {
      type: "POINT",
      allowNull: false,
    },
    carId: {
      type: DataTypes.INTEGER,
      references: {},
    },
  },
  { createdAt: "timestamp" },
);

export default PositionModel;
