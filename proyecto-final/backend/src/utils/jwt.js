import jwt from "jsonwebtoken";
import { CONFIG } from "../config/config.js";

export function generateToken(payload) {
  return jwt.sign(payload, CONFIG.JWT.SECRET, {
    expiresIn: CONFIG.JWT.EXPIRES_IN,
  });
}

export function verifyToken({ token }) {
  return jwt.verify(token, CONFIG.JWT.SECRET);
}
