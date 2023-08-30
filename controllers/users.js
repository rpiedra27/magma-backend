const bcrypt = require("bcrypt");
const { sendRecoveryCodeEmail } = require("../services/mailService");
const User = require("../models/users");
const passport = require("passport");

const saltRounds = 10;

exports.createUser = async (req, res, next) => {
  // #swagger.tags = ['Users']
  /*  #swagger.parameters['obj'] = {
          in: 'body',
          description: 'Add a user',
          schema: { $ref: '#/definitions/CreateUser' }
  } */

  try {
    const user = new User({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
      password: await bcrypt.hash(req.body.password, saltRounds),
    });
    const result = await user.save();
    res.redirect("/");
  } catch (err) {
    res.status(500).json({
      message:
        "Ocurrió un error al crear el usuario. Intente nuevamente. Si el error persiste, contacte al administrador del sistema",
      err,
    });
  }
};

exports.loginUser = async (req, res) => {
  // #swagger.tags = ['Users']
  /*  #swagger.parameters['obj'] = {
          in: 'body',
          description: 'Add a user',
          schema: { $ref: '#/definitions/LoginUser' }
  } */

  passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/ingredients",
  });

  /* try {
    const userPayload = req.body;
    if (
      userPayload.email !== testUser.email ||
      !(await bcrypt.compare(userPayload.password, testUser.password))
    ) {
      res.status(401).send("Invalid credentials");
      return;
    } */

  /*
    const roles = await db.UserRole.findAll({ where: { idUsuario: user.id } });
    const rolesIds = roles.map((r) => r.idRol);
    const token = jwt.sign(
      { userId: user.id, roles: rolesIds },
      process.env.JWT_KEY,
      {
        expiresIn: "10m",
      }
    );
    res.json({
      //...user.toJSON(),
      //token,
      testUser,
    });
  } catch (error) {
    res.status(500).send("Server error: " + error);
  } */
};

exports.recoverPassword = async (req, res) => {
  // #swagger.tags = ['Users']
  /*  #swagger.parameters['obj'] = {
          in: 'body',
          description: 'Add a user',
          schema: { $ref: '#/definitions/RecoverPassword' }
  } */
  try {
    const userPayload = req.body;

    const randomToken = Math.floor(
      Math.random() * (999999 - 100000 + 1) + 100000
    );
    await sendRecoveryCodeEmail(userPayload.email, randomToken);
    res.status(204).send();
  } catch (error) {
    res.status(500).send("Server error: " + error);
  }
};

exports.resetPassword = async (req, res) => {
  // #swagger.tags = ['Users']
  /*  #swagger.parameters['obj'] = {
          in: 'body',
          description: 'Add a user',
          schema: { $ref: '#/definitions/ResetPassword' }
  } */
  const testUser = {
    name: "Rodrigo",
    email: "rodrigo.piedra@ucr.ac.cr",
    password: "$2b$10$RwmQLVkd8YhnfK7paOd3W.oJo5/Zq3UXoIzUsuq.Tyf9pQHi7mzTG",
    code: 963221,
  };

  try {
    const userPayload = req.body;
    if (
      testUser.email !== userPayload.email ||
      testUser.code !== parseInt(userPayload.code)
    ) {
      res.status(401).send("Datos no válidos");
      return;
    }

    testUser.password = await bcrypt.hash(userPayload.password, saltRounds);
    res.json({ testUser });
  } catch (error) {
    res.status(500).send("Server error: " + error);
  }
};

exports.logOut = async (req, res, next) => {
  req.logout(function (err) {
    if (err) {
      return next(err);
    }
    res.redirect("/");
  });
};
