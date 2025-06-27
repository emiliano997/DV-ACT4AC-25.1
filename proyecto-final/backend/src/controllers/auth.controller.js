import { UserService } from "../services/user.service.js";
import { comparePassword, hashPassword } from "../utils/hash.js";
import { generateToken } from "../utils/jwt.js";

export class AuthController {
  static async login(req, res) {
    const { email, password } = req.body;

    if (!email || !password)
      return res
        .status(400)
        .json({ error: "Email y Contraseña son obligatorios" });

    const user = await UserService.getUserByEmail({ email });

    if (!user) return res.status(404).json({ error: "Usuario no registrado" });

    const verifyPassword = await comparePassword({
      password,
      hash: user.password,
    });

    if (!verifyPassword)
      return res.status(401).json({ error: "Contraseña incorrecta" });

    try {
      const token = generateToken({
        id: user.id,
        email: user.email,
        role: user.role,
      });

      res.json({
        token,
      });
    } catch (error) {
      res.status(500).json({
        error: "Error al iniciar sesión",
        details: error,
      });
    }
  }

  static async register(req, res) {
    const { name, email, password, role } = req.body;

    const hashedPassword = await hashPassword({ password });

    const user = {
      name,
      email,
      password: hashedPassword,
      role: role || "user",
    };

    try {
      const newUser = await UserService.createUser({ user });
      res.status(201).json({
        message: "Usuario registrado exitosamente",
        user: newUser,
      });
    } catch (error) {
      res.status(500).json({
        error: "Error al registrar el usuario",
        details: error.message,
      });
    }
  }
}
