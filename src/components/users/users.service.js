// @ts-check

import * as database from "./users.database.js";

export async function registerUser(email, password) {
  const existentUser = await database.getUserByEmail(email);
  if (existentUser) {
    throw new Error("Email already registered");
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
    throw new Error("Invalid credentials");
  }
}
