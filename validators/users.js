const Joi = require("joi");

exports.createUserSchema = Joi.object({
  username: Joi.string().min(3).max(20).required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(8).max(20).alphanum().required(),
  roles: Joi.array().items(Joi.string()).required(),
});

exports.loginSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(8).max(20).alphanum().required(),
});

exports.recoverPasswordSchema = Joi.object({
  email: Joi.string().email().required(),
});

exports.resetPasswordSchema = Joi.object({
  email: Joi.string()
    .email()
    .required()
    .error(
      () =>
        new Error("El email debe tener el formato de un correo electrónico.")
    ),
  password: Joi.string()
    .min(8)
    .max(20)
    .alphanum()
    .required()
    .error(
      () =>
        new Error(
          "La contraseña debe tener números y letras y al menos 8 dígitos."
        )
    ),
  code: Joi.number()
    .integer()
    .min(100000)
    .max(999999)
    .error(() => new Error("El código debe ser un número de 6 dígitos.")),
});
