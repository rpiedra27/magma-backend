const express = require("express");
const {
  drinksList,
  listCombos,
  listDesserts,
  listPizzas,
  listSides,
  listHomePizzas,
  listHomeCombos,
} = require("../controllers/items");

const router = express.Router();

router.route("/homeCombos").get(listHomeCombos);
router.route("/homePizzas").get(listHomePizzas);
router.route("/sides").get(listSides);
router.route("/pizzas").get(listPizzas);
router.route("/desserts").get(listDesserts);
router.route("/combos").get(listCombos);
router.route("/drinks").get(drinksList);

module.exports = router;
