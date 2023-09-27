const jwt = require("jsonwebtoken");

exports.verifyToken = async (req, res, next) => {
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    const token = req.headers.authorization.split(" ")[1];
    jwt.verify(token, process.env.JWT_KEY, async (err, authData) => {
      if (err) {
        res.sendStatus(403);
      } else {
        req.token = token;
        next();
      }
    });
  } else {
    res.sendStatus(403);
  }
};

exports.checkRoles = (requiredRoles) => {
  return async (req, res, next) => {
    const userRoles = req.userRoles;
    const role = userRoles.find((r) => {
      return requiredRoles.find((rr) => rr === r) !== undefined;
    });
    if (role === undefined) {
      return res.status(401).json({
        error: true,
        message:
          "El usuario no tiene los permisos necesarios para acceder a este recurso",
      });
    }
    next();
  };
};
