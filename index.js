import express from "express";
import { Server } from "socket.io";
import { createServer } from "http";
import carsRouter from "./src/components/cars/cars.router.js";
import usersRouter from "./src/components/users/users.router.js";
import { auth } from "./src/lib/auth.js";
import cors from "./src/config/cors.js";
import openapi from "./src/config/openapi.js";
import { initializeSocket } from "./src/config/websockets.js";

const app = express();
const server = createServer(app);
const port = 3000;

initializeSocket(server);
app.use(cors("http://localhost:5173"));
app.use(express.json());
app.use("/cars", auth, carsRouter);
// Don't apply auth middleware to all users routes, (quantum-space-time paradox)
app.use("/users", usersRouter);
app.use("/api-docs", openapi);

server.listen(port, () => {
  console.log("Server running at http://localhost:" + port);
});
