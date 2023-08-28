const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const swaggerFile = require("./swagger.json");
const swaggerUI = require("swagger-ui-express");
const session = require("express-session");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const usersRoutes = require("./routes/users");
const ingredientsRoutes = require("./routes/ingredients");
const ordersRoutes = require("./routes/orders");
const itemsRoutes = require("./routes/items");

const mongoDB = process.env.MONGODB_URI;
mongoose.set("strictQuery", false);
main().catch((err) => console.log(err));
async function main() {
  await mongoose.connect(mongoDB);
}

dotenv.config();
const server = express();
server.use(express.json());
server.use(cors());

server.use("/users", usersRoutes);
server.use("/ingredients", ingredientsRoutes);
server.use("/orders", ordersRoutes);
server.use("/items", itemsRoutes);

server.use("/docs", swaggerUI.serve, swaggerUI.setup(swaggerFile));

passport.use(
  new LocalStrategy(async (email, password, done) => {
    try {
      const user = await User.findOne({ email: email });
      if (!user) {
        return done(null, false, { message: "Incorrect email" });
      }
      const match = await bcrypt.compare(password, user.password);
      if (!match) {
        return done(null, false, { message: "Incorrect password" });
      }
      return done(null, user);
    } catch (err) {
      return done(err);
    }
  })
);

passport.serializeUser(function (user, done) {
  done(null, user.id);
});

passport.deserializeUser(async function (id, done) {
  try {
    const user = await User.findById(id);
    done(null, user);
  } catch (err) {
    done(err);
  }
});

server.use(session({ secret: "cats", resave: false, saveUninitialized: true }));
server.use(passport.initialize());
server.use(passport.session());
server.use(express.urlencoded({ extended: false }));

server.listen(process.env.PORT || 8000);
console.log(
  `The server is listening on http://localhost:${process.env.PORT || 8000}
  You can navigate the documentation at http://localhost:${
    process.env.PORT || 8000
  }/docs`
);
