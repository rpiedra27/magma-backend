//This script populates some test data. Specified database as argument
// e.g.: node populatedb "mongodb+srv://cooluser:coolpassword@cluster0.lz91hw2.mongodb.net/local_library?retryWrites=true&w=majority"'

// Get arguments passed on command line
const userArgs = process.argv.slice(2);

const User = require("./models/users");
const Ingredient = require("./models/ingredients");
const Item = require("./models/items");
const Order = require("./models/orders");

const users = [];
const ingredients = [];
const items = [];
const orders = [];

const mongoose = require("mongoose");
mongoose.set("strictQuery", false);

const mongoDB = userArgs[0];

main().catch((err) => console.log(err));

async function main() {
  console.log("Debug: Connecting...");
  await mongoose.connect(mongoDB);
  console.log("Debug: Should be connected");
  //await createUsers();
  //await createIngredients();
  await createItems();
  //await createOrders();
  console.log("Debug: Closing mongoose");
  mongoose.connection.close();
}

async function itemCreate(index, name, type, description, price, image) {
  const item = new Item({
    name: name,
    type: type,
    description: description,
    price: price,
    image: image,
  });
  await item.save();
  items[index] = item;
  console.log(`Added item: ${name}`);
}

async function createItems() {
  console.log("Adding items");
  await Promise.all([
    itemCreate(
      0,
      "Coca-Cola",
      "drink",
      "600ml",
      800,
      "https://ci0137.s3.amazonaws.com/magma/bebidas/coca+cola.png"
    ),
    itemCreate(
      1,
      "Jugo de naranja",
      "drink",
      "1000ml",
      1100,
      "https://ci0137.s3.amazonaws.com/magma/bebidas/jugo_naranja.png"
    ),
    itemCreate(
      2,
      "Té frío",
      "drink",
      "1000ml",
      1300,
      "https://ci0137.s3.amazonaws.com/magma/bebidas/te_frio_limon.png"
    ),
    itemCreate(
      3,
      "Pizza de jamón",
      "pizza",
      "Salsa de tomate, queso mozarella y jamón",
      7000,
      "https://ci0137.s3.amazonaws.com/magma/pizzas/p%C3%ACzza_jam%C3%B3n.png"
    ),
    itemCreate(
      4,
      "Pizza de pepperoni",
      "pizza",
      "Salsa: Tomate\nQueso: Gouda\nIngredientes: Pepperoni",
      8000,
      "https://ci0137.s3.amazonaws.com/magma/pizzas/pizza_pepperoni.png"
    ),
    itemCreate(
      5,
      "Pizza texana",
      "pizza",
      "Salsa: BBQ\nQueso: Gouda\nIngredientes: Jamón y cebolla",
      9000,
      "https://ci0137.s3.amazonaws.com/magma/pizzas/pizza_texana.png"
    ),
    itemCreate(
      6,
      "Pizza suprema",
      "pizza",
      "Salsa: Tomate\nQueso: Mozzarella\nIngredientes: Pepperoni, jamón, chile dulce, hongos, carne molida y cebolla",
      11000,
      "https://ci0137.s3.amazonaws.com/magma/pizzas/pizza_suprema.png"
    ),
    itemCreate(
      7,
      "Pizza caótica",
      "pizza",
      "Salsa: Picante\nQueso: Parmesano\nIngredientes: Salami, maíz, aceituna, hongos y cebolla",
      10000,
      "https://ci0137.s3.amazonaws.com/magma/pizzas/pizza_ca%C3%B3tica.png"
    ),
    itemCreate(
      8,
      "Pizza con piña",
      "pizza",
      "Salsa: Tomate\nQueso: Parmesano\nIngredientes: Piña y jamón",
      8000,
      "https://ci0137.s3.amazonaws.com/magma/pizzas/pizza_tropical.png"
    ),

    itemCreate(
      9,
      "Helado de vainilla",
      "dessert",
      "3 bolas de helado que se puede pedir con sirope de chocolate o caramelo",
      2100,
      "https://ci0137.s3.amazonaws.com/magma/postres/helado_vainilla.png"
    ),
    itemCreate(
      10,
      "Tres leches",
      "dessert",
      "Pedazo de Tres leches, disfruta el sabor costarricense",
      2900,
      "https://ci0137.s3.amazonaws.com/magma/postres/tres_leches.png"
    ),
    itemCreate(
      11,
      "Flan",
      "dessert",
      "Disfrutá del flan más exquisito",
      3300,
      "https://ci0137.s3.amazonaws.com/magma/postres/flan.png"
    ),
    itemCreate(
      12,
      "2 pizzas medianas de jamón + 2 coca colas",
      "combo",
      "Promoción disponible todos los días",
      16000,
      "https://ci0137.s3.amazonaws.com/magma/promos/Promo-2pizzas-2cocas.png"
    ),
    itemCreate(
      13,
      "3 slices de pizza de jamón",
      "combo",
      "Promoción disponible todos los días",
      1500,
      "https://ci0137.s3.amazonaws.com/magma/promos/3-slices-jamon.png"
    ),
    itemCreate(
      14,
      "1 coca cola + 2 pizzas de pepperoni pequeñas",
      "combo",
      "Promoción disponible todos los días",
      15000,
      "https://ci0137.s3.amazonaws.com/magma/promos/2pizzas%2Bcocacola.png"
    ),
    itemCreate(
      15,
      "2x1 en pizzas",
      "combo",
      "2 pizzas de Jamón medianas al precio de 1",
      12000,
      "https://ci0137.s3.amazonaws.com/magma/promos/doble-pizza-+jamon.png"
    ),

    itemCreate(
      16,
      "2 pizzas medianas de jamón + 2 coca colas",
      "homeCombo",
      "",
      0,
      "https://ci0137.s3.amazonaws.com/magma/promos/Promo-2pizzas-2cocas.png"
    ),
    itemCreate(
      17,
      "3 slices de pizza de jamón",
      "homeCombo",
      "",
      0,
      "https://ci0137.s3.amazonaws.com/magma/promos/3-slices-jamon.png"
    ),
    itemCreate(
      18,
      "1 coca cola + 2 pizzas de pepperoni pequeñas",
      "homeCombo",
      "",
      0,
      "https://ci0137.s3.amazonaws.com/magma/promos/2pizzas%2Bcocacola.png"
    ),
    itemCreate(
      19,
      "2x1 en pizzas",
      "homeCombo",
      "",
      0,
      "https://ci0137.s3.amazonaws.com/magma/promos/doble-pizza-+jamon.png"
    ),

    itemCreate(
      20,
      "Pizza clásica de jamón",
      "homePizza",
      "",
      0,
      "https://ci0137.s3.amazonaws.com/magma/pizzas/p%C3%ACzza_jam%C3%B3n.png"
    ),
    itemCreate(
      21,
      "Pizza clásica de pepperoni",
      "homePizza",
      "",
      0,
      "https://ci0137.s3.amazonaws.com/magma/pizzas/pizza_pepperoni.png"
    ),
    itemCreate(
      22,
      "Pizza innovadora texana",
      "homePizza",
      "",
      0,
      "https://ci0137.s3.amazonaws.com/magma/pizzas/pizza_texana.png"
    ),
    itemCreate(
      23,
      "Pizza caótica",
      "homePizza",
      "",
      0,
      "https://ci0137.s3.amazonaws.com/magma/pizzas/pizza_ca%C3%B3tica.png"
    ),
    itemCreate(
      24,
      "Pan de ajo",
      "side",
      "unidades: 5",
      1200,
      "https://ci0137.s3.amazonaws.com/magma/acompa%C3%B1amientos/pan_ajo.png"
    ),
    itemCreate(
      25,
      "Bread sticks con salsa de tomate",
      "side",
      "unidades: 10",
      2000,
      "https://ci0137.s3.amazonaws.com/magma/acompa%C3%B1amientos/breadsticks_con_salsa.png"
    ),
    itemCreate(
      26,
      "Calzone",
      "side",
      "unidades: 1",
      1500,
      "https://ci0137.s3.amazonaws.com/magma/acompa%C3%B1amientos/calzone.png"
    ),
    itemCreate(
      27,
      "Pan con tomate y queso",
      "side",
      "unidades: 9",
      2500,
      "https://ci0137.s3.amazonaws.com/magma/acompa%C3%B1amientos/pan_tomate_queso.png"
    ),
  ]);
}
