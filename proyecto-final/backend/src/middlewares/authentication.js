import { verifyToken } from "../utils/jwt.js";

export function authentication(req, res, next) {
  const token = req.headers["authorization"];

  if (!token) return res.status(401).json({ error: "No estás autenticado" });

  try {
    const decoded = verifyToken({ token });

    req.user = decoded;
    next();
  } catch (error) {
    res.status(401).json({
      error: "JWT no válido",
      details: error,
    });
  }
}
