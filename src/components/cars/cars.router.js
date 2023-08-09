// @ts-check

import express from "express";
import * as controller from "./cars.controller.js";

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
carsRouter.post("/", controller.registerCar);

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
carsRouter.get("/:carId", controller.getCar);

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
carsRouter.patch("/:carId", controller.updateCar);

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
carsRouter.delete("/:carId", controller.deleteCar);

export default carsRouter;
