// @ts-check

import AppError from "../../lib/appError.js";
import { createToken } from "../../lib/auth.js";
import * as database from "./users.database.js";

export async function registerUser(email, password) {
  const existentUser = !!(await database.getUserByEmail(email));
  if (existentUser) {
    throw new AppError("DuplicatedEmail", 400, "Email already registered");
  }

  return database.registerUser({ email, password });
}

export async function login(email, password) {
  const user = await database.getUserByEmail(email);
  if (!user) {
    throw new Error("Invalid user id");
  }

  const savedPassword = user.get("password");
  if (password !== savedPassword) {
    throw new AppError("Unauthorized", 400, "Invalid user credentials");
  }

  const token = createToken({
    id: user.get("id"),
    email: user.get("email"),
  });

  return { token };
}
