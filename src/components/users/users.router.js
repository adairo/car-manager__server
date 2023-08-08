// @ts-check

import { Router } from "express";
import * as controller from "./users.controller.js";
import { auth } from "../../lib/auth.js";

const usersRouter = Router();

usersRouter.post("/", controller.registerUser);
usersRouter.put("/login", controller.login);
usersRouter.get("/testAuth", auth, (_, res) =>
  res.status(200).send("Authorized")
);

export default usersRouter;
