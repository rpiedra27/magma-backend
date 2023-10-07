const express = require("express");
const router = express.Router();
const {
  signUp,
  login,
  recoverPassword,
  resetPassword,
  logout,
} = require("../controllers/users");
const { isAuthenticated, checkRoles } = require("../middlewares/auth");
const { validateSchema } = require("../middlewares/validation");
const { ROLES } = require("../utils/constants");
const {
  createUserSchema,
  loginSchema,
  recoverPasswordSchema,
  resetPasswordSchema,
} = require("../validators/users");

/* router
  .route("/")
  .get([checkUserIsAuthenticated, checkRoles([ROLES.ADMIN])])
  .post([validateSchema(createUserSchema)], createUser); */

router.route("/signUp").post([validateSchema(createUserSchema)], signUp);

router.route("/login").post([validateSchema(loginSchema)], login);

router
  .route("/recoverPassword")
  .post([validateSchema(recoverPasswordSchema)], recoverPassword);

router
  .route("/resetPassword")
  .patch([validateSchema(resetPasswordSchema)], resetPassword);

router.route("/logout").post([isAuthenticated], logout);

module.exports = router;
