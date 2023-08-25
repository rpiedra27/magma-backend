const express = require("express");
const dotenv = require("dotenv");
const swaggerUI = require("swagger-ui-express");
const cors = require("cors");
const swaggerFile = require('./swagger.json')
const usersRoutes = require("./routes/users");
const pizzasRoutes = require("./routes/pizzas");
const drinksRoutes = require("./routes/drinks");
const accompanimentsRoutes = require("./routes/accompaniments");
const desertsRoutes = require("./routes/deserts");
const ingredientsRoutes = require("./routes/ingredients");
const homePizzasRoutes = require("./routes/homePizzas");
const homeCombosRoutes = require("./routes/homeCombos");
const combosRoutes = require("./routes/combos");
const ordersRoutes = require("./routes/orders")
dotenv.config();
const server = express();
server.use(express.json());
server.use(cors());
//connect();

//Mount routes
server.use("/users", usersRoutes);
server.use("/pizzas", pizzasRoutes);
server.use("/drinks", drinksRoutes);
server.use("/accompaniments", accompanimentsRoutes);
server.use("/deserts", desertsRoutes);
server.use("/ingredients", ingredientsRoutes);
server.use("/homePizzas", homePizzasRoutes);
server.use("/homeCombos", homeCombosRoutes);
server.use("/combos", combosRoutes);
server.use("/orders", ordersRoutes);

// Documentation setup
server.use("/docs", swaggerUI.serve, swaggerUI.setup(swaggerFile));

server.listen(process.env.PORT || 8000);
console.log(
  `The server is listening on http://localhost:${process.env.PORT || 8000}
  You can navigate the documentation at http://localhost:${process.env.PORT || 8000}/docs`
);