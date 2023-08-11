import { Sequelize } from "sequelize";

const sequelize = new Sequelize(
  "postgres://postgres:spore@localhost:5432/spore-start",
);

sequelize
  .authenticate()
  .then(() =>
    console.log("Connection to database has been established successfully."),
  )
  .then(() =>
    sequelize
      .sync({ alter: true })
      .then(() => console.log("All models synchronized succesfully")),
  )
  .catch((error) =>
    console.error("Error connecting to the database: " + error),
  );

export default sequelize;
