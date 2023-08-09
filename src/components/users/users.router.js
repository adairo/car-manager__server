// @ts-check

import { Router } from "express";
import * as controller from "./users.controller.js";
import { auth } from "../../lib/auth.js";

const usersRouter = Router();

/**
 * @swagger
 * /users:
 *   post:
 *     tags:
 *       - user
 *     description: Save the email and password of a new user
 *     summary: Register a new user
 *     operationId: registerUser
 *     requestBody:
 *       description: Register a new car in the database
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *     responses:
 *       201:
 *         description: User succesfully registered
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       400:
 *         description: Email already registered
 *
 */
usersRouter.post("/", controller.registerUser);

/**
 * @swagger
 * /users/login:
 *   get:
 *     tags:
 *       - user
 *     description: Validate credentials and return session token
 *     summary: Login user
 *     operationId: login
 *     parameters:
 *       - name: email
 *         in: query
 *         required: true
 *         schema:
 *           type: string
 *           example: username@spore.cloud
 *       - name: password
 *         in: query
 *         required: true
 *         schema:
 *           type: string
 *           example: safepassword123
 *     responses:
 *       200:
 *         description: Successful operation
 *         content:
 *           application/json:
 *             schema:
 *               type: string
 *               description: Session token
 *               example: a837dhvnn4735612.sjdj98947j.YtyhbCJi8
 *       400:
 *         description: Invalid credentials
 *
 */
usersRouter.get("/login", controller.login);
usersRouter.get("/testAuth", auth, (_, res) => {
  res.status(200).send("Authorized");
});

export default usersRouter;
