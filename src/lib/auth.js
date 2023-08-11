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
  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }
  const tokenHeader = req.headers["authorization"]; // Bearer {token} <-
  if (!tokenHeader) {
    return res.status(402).json({ error: "Credentials are mandatory" });
  }
  const [_bearer, token] = tokenHeader?.split(" ") ?? [,];

  try {
    verifyToken(token);
    // here we could save the token payload on the request object
    next();
  } catch (error) {
    return res.status(403).json({ error: "Unauthorized" });
  }
}
