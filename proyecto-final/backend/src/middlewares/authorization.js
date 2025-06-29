export function authorization(...role) {
  return (req, res, next) => {
    if (!role.includes(req.user.role))
      return res
        .status(403)
        .json({ error: "No tienes permisos para acceder a este recurso" });

    next();
  };
}
