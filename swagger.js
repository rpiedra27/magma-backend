const swaggerAutogen = require("swagger-autogen")();

const doc = {
  info: {
    title: "API Pizza Magma",
    description:
      "API for Magma Pizza, handles accounts, user orders, and menu items.",
  },
  host: "localhost:8000",
  schemes: ["http", "https"],
  definitions: {
    SignUp: {
      name: "John Doe",
      email: "john@mail.com",
      password: "patito",
    },
    Login: {
      email: "name@mail.com",
      password: "patito",
    },
    RecoverPassword: {
      email: "name@mail.com",
    },
    ResetPassword: {
      email: "name@mail.com",
      password: "patito",
      code: 123456,
    },
    CreateIngredient: {
      label: "Diet Soda 250ml",
      type: "drink",
      price: 1000,
      value: "diet-soda",
    },
    UpdateIngredient: {
      id: "64eaa86d4bf1c0a42a498836",
      label: "Carne molida",
      type: "meat",
      price: 500,
      value: "beef",
    },
    CreateItem: {
      name: "Soda",
      type: "drink",
      description: "1 Liter",
      price: 1000,
      image: "https://magma.s3.amazonaws.com/drinks/soda.png",
    },
    UpdateItem: {
      id: "64eaa86d4bf1c0a42a498836",
      name: "Soda",
      type: "drink",
      description: "1 Liter",
      price: 1000,
      image: "https://magma.s3.amazonaws.com/drinks/soda.png",
    },
    CreateOrder: {
      user: "Soda",
      cost: "drink",
      date: "1 Liter",
      items: "1000",
    },
  },
};

const outputFile = "./swagger.json";
const endpointsFiles = ["./server.js"];

swaggerAutogen(outputFile, endpointsFiles, doc).then(() => {
  require("./server.js");
});
