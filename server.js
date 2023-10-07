const express = require("express");
const session = require("express-session");
const MongoStore = require("connect-mongo");
const dotenv = require("dotenv");
const cors = require("cors");
const swaggerFile = require("./swagger.json");
const swaggerUI = require("swagger-ui-express");
const mongoose = require("mongoose");

const usersRoutes = require("./routes/users");
const ingredientsRoutes = require("./routes/ingredients");
const ordersRoutes = require("./routes/orders");
const itemsRoutes = require("./routes/items");

dotenv.config();
const server = express();
server.use(express.json());
server.use(cors());

const mongoDB = process.env.MONGODB_URI;
mongoose.set("strictQuery", false);
main().catch((err) => console.log(err));
async function main() {
  await mongoose.connect(mongoDB);
}

server.use(
  session({
    secret: process.env.SESSION_SECRET,
    cookie: { maxAge: 1000 * 60 * 60 * 24, secure: false }, //one day
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({ mongoUrl: process.env.MONGODB_URI}),
  })
);

server.use("/users", usersRoutes);
server.use("/ingredients", ingredientsRoutes);
server.use("/orders", ordersRoutes);
server.use("/items", itemsRoutes);
//server.use("/docs", swaggerUI.serve, swaggerUI.setup(swaggerFile));

server.listen(process.env.PORT || 8000, () =>
  console.log(
    `The server is listening on http://localhost:${process.env.PORT || 8000}
  You can navigate the documentation at http://localhost:${
    process.env.PORT || 8000
  }/docs`
  )
);

module.exports = server;
