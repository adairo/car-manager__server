// @ts-check

import express from "express";
import * as controller from "./cars.controller.js";
import * as schema from "./cars.schema.js";
import { validate } from "../../lib/validate.js";

const carsRouter = express.Router();

/**
 * @swagger
 * /cars:
 *   get:
 *     tags:
 *       - car
 *     summary: Find cars
 *     description: Get a list of all cars
 *     operationId: getAllCars
 *     responses:
 *       200:
 *         description: Succesful operation
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Car'
 *
 */
carsRouter.get("/", controller.getAllCars);

/**
 * @swagger
 * /cars:
 *   post:
 *     tags:
 *       - car
 *     description: Register a new car
 *     summary: Register a car
 *     operationId: registerCar
 *     requestBody:
 *       description: Register a new car in the database
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Car'
 *     responses:
 *       201:
 *         description: Car succesfully registered
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Car'
 *       400:
 *         description: Plate already registered
 *
 */
carsRouter.post("/", validate(schema.registerCar), controller.registerCar);

/**
 * @swagger
 * /cars/{carId}:
 *   get:
 *     tags:
 *       - car
 *     description: Returns a single car
 *     summary: Find car by id
 *     operationId: getCarById
 *     parameters:
 *       - name: carId
 *         in: path
 *         description: Id of the car to return
 *         required: true
 *         schema:
 *           type: integer
 *           format: int64
 *     responses:
 *       200:
 *         description: Succesful operation
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Car'
 *       400:
 *         description: Car does not exist
 *
 */
carsRouter.get("/:carId", validate(schema.getCar), controller.getCar);

/**
 * @swagger
 * /cars/{carId}/position:
 *   put:
 *     tags:
 *       - car
 *     description: Update the position of a car
 *     summary: Update car position
 *     operationId: updateCarPosition
 *     parameters:
 *       - in: path
 *         name: carId
 *         description: id of the car to update its position
 *         required: true
 *         schema:
 *           type: integer
 *           format: int32
 *           example: 1
 *       - in: query
 *         name: lattitude
 *         description: lattitude
 *         required: true
 *         schema:
 *           type: number
 *           format: float
 *           example: 1.23223
 *       - in: query
 *         name: longitude
 *         description: longitude
 *         required: true
 *         schema:
 *           type: number
 *           format: float
 *           example: 34.544
 *
 */
carsRouter.put(
  "/:carId/position",
  validate(schema.updatePosition),
  controller.updatePosition,
);

/**
 * @swagger
 * /cars/{carId}:
 *   patch:
 *     tags:
 *       - car
 *     description: Update the plate of an existent car
 *     summary: Update the data of a car
 *     operationId: updateCar
 *     parameters:
 *       - name: carId
 *         in: path
 *         description: Id of the car to update
 *         required: true
 *         schema:
 *           type: integer
 *           format: int64
 *     requestBody:
 *       description:
 *         Update the plate of an already registered car
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               plate:
 *                 type: string
 *                 example: TRHY450
 *     responses:
 *       200:
 *         description: Succesful operation
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Car'
 *       400:
 *         description: Car does not exist
 *
 */
carsRouter.patch("/:carId", validate(schema.updateCar), controller.updateCar);

/**
 * @swagger
 * /cars/{carId}:
 *   delete:
 *     tags:
 *       - car
 *     description: Delete the car with the provided id
 *     summary: Delete car
 *     operationId: deleteCar
 *     parameters:
 *       - name: carId
 *         in: path
 *         description: Id of the car to update
 *         required: true
 *         schema:
 *           type: integer
 *           format: int64
 *     responses:
 *       200:
 *         description: Car succesfully removed
 *       400:
 *         description: Car does not exist
 *
 */
carsRouter.delete("/:carId", validate(schema.deleteCar), controller.deleteCar);

export default carsRouter;
