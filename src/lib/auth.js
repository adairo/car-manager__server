// @ts-check

import jwt from "jsonwebtoken";

const TOKEN_KEY = "2fYPt3PfI3KkI6qx5KIvZTyb6zZDV6pChIXN53R5";

export function createToken(payload) {
  return jwt.sign(payload, TOKEN_KEY, { expiresIn: "4h" });
}

export function verifyToken(token) {
  jwt.verify(token, TOKEN_KEY);
}

export function auth(req, res, next) {
  const token = req.headers["authorization"];
  if (!token) {
    return res.status(403).json({ error: "Credentials are mandatory" });
  }

  try {
    verifyToken(token);
    // here we could save the token payload on the request object
    next();
  } catch (error) {
    return res.status(403).json({ error: "Invalid credentials" });
  }
}