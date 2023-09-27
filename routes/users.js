const express = require("express");
const router = express.Router();
const {
  createUser,
  login,
  recoverPassword,
  resetPassword,
  logOut
} = require("../controllers/users");
const { checkUserIsAuthenticated, checkRoles } = require("../middlewares/auth");
const { validateSchema } = require("../middlewares/validation");
const { ROLES } = require("../utils/constants");
const {
  createUserSchema,
  loginSchema,
  recoverPasswordSchema,
  resetPasswordSchema,
} = require("../validators/users");

router.route("/").post(createUser);

/* router
  .route("/")
  .get([checkUserIsAuthenticated, checkRoles([ROLES.ADMIN])])
  .post([validateSchema(createUserSchema)], createUser); */

//router.route("/login").post([validateSchema(loginSchema)], loginUser);

router.route("/login").post(login);

router
  .route("/recover-password")
  .post([validateSchema(recoverPasswordSchema)], recoverPassword);

router
  .route("/reset-password")
  .patch([validateSchema(resetPasswordSchema)], resetPassword);

router.route("/log-out").get(logOut);

module.exports = router;
