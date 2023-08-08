import { Sequelize } from "sequelize";

const sequelize = new Sequelize(
  "postgres://postgres:spore@localhost:5432/spore-start",
);

/* try {
  await sequelize.authenticate();
  console.log("Connection to database has been established successfully.");
} catch (error) {
  console.error("Unable to connect to the database:", error);
} */

sequelize
  .sync({ alter: true })
  .then(() => console.log("All models synchronized succesfully"));
export default sequelize;
