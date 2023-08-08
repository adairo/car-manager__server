// @ts-check

import { Router } from "express";
import * as controller from "./users.controller.js";

const usersRouter = Router();

usersRouter.post("/", controller.registerUser);
usersRouter.put("/login", controller.login);

export default usersRouter;
