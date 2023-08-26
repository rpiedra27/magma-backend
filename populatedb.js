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
  ]);
}
