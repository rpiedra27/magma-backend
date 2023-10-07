const jwt = require("jsonwebtoken");

exports.isAuthenticated = async (req, res, next) => {
  if (req.session.user) {
    next();
  } else {
    res.status(401).send();
  }
};

exports.verifyToken = async (req, res, next) => {
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    const token = req.headers.authorization.split(" ")[1];
    jwt.verify(token, process.env.JWT_KEY, async (err, authData) => {
      if (err) {
        res.sendStatus(401);
      } else {
        req.token = token;
        next();
      }
    });
  } else {
    res.sendStatus(401);
  }
};

exports.checkRoles = (requiredRoles) => {
  const allowedRoles = new Set(requiredRoles);
  return async (req, res, next) => {
    if (req.session.roles.some((role) => allowedRoles.has(role))) {
      next();
    } else {
      res.status(403).json({
        error: true,
        message: "Unauthorized to access this resource",
      });
    }
  };
};
