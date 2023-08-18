import AppError from "../../lib/appError.js";
import { getValidated } from "../../lib/validate.js";
import * as service from "./position.service.js";

export async function getPositionsByCarId(req, res) {
  const {
    params: { carId },
  } = getValidated(req);

  try {
    const positions = await service.getPositionsByCarId(carId);
    res.status(200).send(positions);
  } catch (error) {
    if (error instanceof AppError) {
      return res.status(error.httpCode).send({ error: error.message });
    }

    throw error;
  }
}

export async function setCarPosition(req, res) {
  const {
    params: { carId },
    query: { lattitude, longitude },
  } = getValidated(req);

  try {
    await service.setCarPosition(carId, { lattitude, longitude });
    res.sendStatus(200);
  } catch (error) {
    if (error instanceof AppError) {
      return res.status(error.httpCode).send({ error: error.message });
    }

    throw error;
  }
}
