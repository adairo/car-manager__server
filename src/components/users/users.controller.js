// @ts-check

import * as service from "./users.service.js";

export function registerUser(req, res) {
  const { email, password } = req.body;

  try {
    const newUser = service.registerUser(email, password);
    res.status(200).send(newUser);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
}

export function login(req, res) {
  const { email, password } = req.body;
  const token = service.login(email, password);
  res.status(200).end();
}