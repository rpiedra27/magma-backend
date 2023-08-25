
exports.listDrinks = async (req, res) => {
  // #swagger.tags = ['Drinks']
  const drinks = [{
    id: 1,
    name: 'Coca cola',
    description: 'Categoria: Gaseosa\nMililitros: 600',
    price: 800,
    image: 'https://ci0137.s3.amazonaws.com/magma/bebidas/coca+cola.png'
  },
  {
    id: 2,
    name: 'Jugo de naranja',
    description: 'Categoria: Jugo natural\nMililitros: 1000',
    price: 1100,
    image: 'https://ci0137.s3.amazonaws.com/magma/bebidas/jugo_naranja.png'
  },
  {
    id: 3,
    name: 'Té frío de limón',
    description: 'Categoria: Te frío\nMililitros: 1000',
    price: 1300, 
    image: 'https://ci0137.s3.amazonaws.com/magma/bebidas/te_frio_limon.png'
  }
]
  res.json(drinks);
};