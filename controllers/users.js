const bcrypt = require("bcrypt");
const User = require("../models/users");
const { sendRecoveryCodeEmail } = require("../services/mailService");
const saltRounds = 10;
const jwt = require("jsonwebtoken");

exports.signUp = async (req, res, next) => {
  // #swagger.tags = ['Users']
  /*  #swagger.parameters['obj'] = {
          in: 'body',
          description: 'Create a new user',
          schema: { $ref: '#/definitions/SignUp' }
  } */

  if ((await User.findOne({ email: req.body.email })) !== null) {
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
      return next(err);
    }
  } else {
    res.status(409).send("Email already in use");
  }
};

exports.login = async (req, res) => {
  // #swagger.tags = ['Users']
  /*  #swagger.parameters['obj'] = {
          in: 'body',
          description: 'Add a user',
          schema: { $ref: '#/definitions/LoginUser' }
  } */

  //TODO: Roles
  try {
    const user = await User.findOne({ email: req.body.email });
    if (user !== null) {
      if (
        req.body.email === user.email &&
        (await bcrypt.compare(req.body.password, user.password))
      ) {
        const token = jwt.sign({ userEmail: user.email }, process.env.JWT_KEY, {
          expiresIn: "2 days",
        });
        res.status(200).json({
          message: "Auth Passed",
          token,
        });
      } else {
        res.status(401).send("Invalid credentials");
      }
    }
  } catch (error) {
    res.status(500).send("Server error: " + error);
  }
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
  
};
