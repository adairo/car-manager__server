// @ts-check

import AppError from "../../lib/appError.js";
import * as service from "./users.service.js";

export async function registerUser(req, res) {
  const { email, password } = req.body;

  try {
    const newUser = await service.registerUser(email, password);
    res.status(201).send(newUser);
  } catch (error) {
    if (error instanceof AppError) {
      return res.status(error.httpCode).json({ error: error.message });
    }

    throw error;
  }
}

export async function login(req, res) {
  const { email, password } = req.query;

  try {
    const token = await service.login(email, password);
    res.status(200).send(token);
  } catch (error) {
    if (error instanceof AppError) {
      return res.status(error.httpCode).json({ error: error.message });
    }

    throw error;
  }
}
