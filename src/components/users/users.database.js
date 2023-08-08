import UserModel from "./users.model.js";

export function registerUser(userData) {
  return UserModel.create(userData, { returning: ["id"] });
}

export function getUserByEmail(email) {
  return UserModel.findOne({
    where: { email: email },
    attributes: ["id", "email", "password"],
  });
}
