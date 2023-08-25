
exports.listAccompaniments = async (req, res) => {
  // #swagger.tags = ['Accompaniments']
  const accompaniments = [
    {
      id: 1,
      name: 'Pan de ajo',
      description: 'unidades: 5',
      price: 1200,
      image: 'https://ci0137.s3.amazonaws.com/magma/acompa%C3%B1amientos/pan_ajo.png'
    },
    {
      id: 2,
      name: 'Bread sticks con salsa de tomate',
      description: 'unidades: 10',
      price: 2000,
      image: 'https://ci0137.s3.amazonaws.com/magma/acompa%C3%B1amientos/breadsticks_con_salsa.png'
    },
    {
      id: 3,
      name: 'Calzone',
      description: 'unidades: 1',
      price: 1500,
      image: 'https://ci0137.s3.amazonaws.com/magma/acompa%C3%B1amientos/calzone.png'
    },
    {
      id: 4,
      name: 'Pan con tomate y queso',
      description: 'unidades: 9',
      price: 2500,
      image: 'https://ci0137.s3.amazonaws.com/magma/acompa%C3%B1amientos/pan_tomate_queso.png'
    }
  ]
  res.json(accompaniments);
};