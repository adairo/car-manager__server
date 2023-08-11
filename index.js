import express from "express";
import carsRouter from "./src/components/cars/cars.router.js";
import usersRouter from "./src/components/users/users.router.js";
import cors from "./src/lib/cors.js";
import { auth } from "./src/lib/auth.js";
import openapi from "./src/config/openapi.js";

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors("http://localhost:5173"));
app.use("/cars", auth, carsRouter);
// Don't apply auth middleware to all users routes, (quantum paradox space-time-aware)
app.use("/users", usersRouter);
app.use("/api-docs", openapi);

app.listen(port, () => {
  console.log("Server running at http://localhost:" + port);
});
