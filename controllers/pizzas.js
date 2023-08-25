
exports.listPizzas = async (req, res) => {
  // #swagger.tags = ['Pizzas']
  const pizzas = [{
    id:1,
    name:'Pizza de jamón',
    description: 'Salsa: Tomate\nQueso: Mozarella\nIngredientes: Jamón',
    price:7000,
    image: 'https://ci0137.s3.amazonaws.com/magma/pizzas/p%C3%ACzza_jam%C3%B3n.png'
  },
  {
    id:2,
    name:'Pizza de pepperoni',
    description: 'Salsa: Tomate\nQueso: Gouda\nIngredientes: Pepperoni',
    price:8000,
    image: 'https://ci0137.s3.amazonaws.com/magma/pizzas/pizza_pepperoni.png'
  },
  {
    id:3,
    name:'Pizza texana',
    description: 'Salsa: BBQ\nQueso: Gouda\nIngredientes: Jamón y cebolla',
    price:9000,
    image: 'https://ci0137.s3.amazonaws.com/magma/pizzas/pizza_texana.png'
  },
  {
    id:4,
    name:'Pizza suprema',
    description: 'Salsa: Tomate\nQueso: Mozzarella\nIngredientes: Pepperoni, jamón, chile dulce, hongos, carne molida y cebolla',
    price:11000,
    image: 'https://ci0137.s3.amazonaws.com/magma/pizzas/pizza_suprema.png'
  },
  {
    id:5,
    name:'Pizza caótica',
    description: 'Salsa: Picante\nQueso: Parmesano\nIngredientes: Salami, maíz, aceituna, hongos y cebolla',
    price:10000,
    image: 'https://ci0137.s3.amazonaws.com/magma/pizzas/pizza_ca%C3%B3tica.png'
  },
  {
    id:6,
    name:'Pizza con piña',
    description: 'Salsa: Tomate\nQueso: Parmesano\n Ingredientes: Piña y jamón',
    price:8000,
    image: 'https://ci0137.s3.amazonaws.com/magma/pizzas/pizza_tropical.png'
  },
]
  res.json(pizzas);
};