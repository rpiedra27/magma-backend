const bcrypt = require("bcrypt");
const User = require("../models/users");
const { sendRecoveryCodeEmail } = require("../services/mailService");
const saltRounds = 10;
const jwt = require("jsonwebtoken");

exports.signUp = async (req, res, next) => {
  /* #swagger.tags = ['Users']
     #swagger.description = 'Creates a new user'
     #swagger.parameters['obj'] = {
          in: 'body',
          description: 'The user to be created',
          schema: { $ref: '#/definitions/SignUp' }
  } */

  if ((await User.findOne({ email: req.body.email })) !== null) {
    try {
      const user = new User({
        username: req.body.username,
        email: req.body.email,
        password: await bcrypt.hash(req.body.password, saltRounds),
      });
      await user.save();
      res.redirect("/");
    } catch (err) {
      return next(err);
    }
  } else {
    res.status(409).send("Email already in use");
  }
};

exports.login = async (req, res) => {
  /* #swagger.tags = ['Users']
     #swagger.description = 'Creates a new user session'
     #swagger.parameters['obj'] = {
        in: 'body',
        description: 'The user that logged in',
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
  /* #swagger.tags = ['Users']
     #swagger.description = 'Generates a recovery code that will be used as a temporary password until
      the user finishes the account recovery process'
     #swagger.parameters['obj'] = {
        in: 'body',
        description: 'The email address linked to the users account',
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

//TODO
exports.resetPassword = async (req, res) => {
  /* #swagger.tags = ['Users']
     #swagger.description = 'Resets a user password'
     #swagger.parameters['obj'] = {
        in: 'body',
        description = 'dark',
        schema: { $ref: '#/definitions/ResetPassword' }
  } */
  try {
    const user = await User.findOne({ email: req.body.email });
    if (
      testUser.email !== req.body.email ||
      testUser.code !== parseInt(req.body.code)
    ) {
      res.status(401).send("Datos no válidos");
      return;
    }

    testUser.password = await bcrypt.hash(req.body.password, saltRounds);
    res.json({ testUser });
  } catch (error) {
    res.status(500).send("Server error: " + error);
  }
};

exports.logOut = async (req, res, next) => {
  // #swagger.tags = ['Users']
};
