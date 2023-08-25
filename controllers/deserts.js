
exports.listDeserts = async (req, res) => {
  // #swagger.tags = ['Deserts']
  const deserts = [{
    id: 1,
    name: 'Helado de vainilla',
    description: '3 bolas de helado que se puede pedir con sirope de chocolate o caramelo',
    price: 2100,
    image: 'https://ci0137.s3.amazonaws.com/magma/postres/helado_vainilla.png'
  },
  {
    id: 2,
    name: 'Tres leches',
    description: 'Pedazo de Tres leches, disfruta el sabor costarricense',
    price: 2900,
    image: 'https://ci0137.s3.amazonaws.com/magma/postres/tres_leches.png'
  },
  {
    id: 3,
    name: 'flan',
    description: 'Disfrutá del flan más exquisito',
    price: 3300,
    image: 'https://ci0137.s3.amazonaws.com/magma/postres/flan.png'
  }
]
  res.json(deserts);
};