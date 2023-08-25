const swaggerAutogen = require("swagger-autogen")();

const doc = {
  info: {
    title: "API Pizza Magma",
    description: "API de la Pizzería Magma, maneja cuentas y órdenes de los usuarios e items de los menús.",
  },
  host: "evening-refuge-56391.herokuapp.com",
  schemes: ["http", "https"],
  definitions: {
    CreateUser: {
      name: "José Rodríguez Pérez",
      email: "jose@correo.com",
      password: "patito",
    },
    LoginUser: {
      email: "jose@correo.com",
      password: "patito",
    },
    RecoverPassword: {
      email: "jose@correo.com",
    },
    ResetPassword: {
      email: "jose@correo.com",
      password: "patito",
      code: 123456,
    },
  },
};

const outputFile = "./swagger.json";
const endpointsFiles = ["./server.js"];

swaggerAutogen(outputFile, endpointsFiles, doc).then(() => {
  require("./server.js");
});
