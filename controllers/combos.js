
exports.listCombos = async (req, res) => {
    // #swagger.tags = ['Combos']
    const combos = [
        {
            id : 1,
            name: '2 pizzas medianas de jamón + 2 coca colas',
            description : 'Promoción disponible todos los días',
            price : 16000,
            image: 'https://ci0137.s3.amazonaws.com/magma/promos/Promo-2pizzas-2cocas.png'
        },
        {
            id : 2,
            name: '3 slices de pizza de jamón',
            description: 'Promoción disponible todos los días',
            price: 1500,
            image: 'https://ci0137.s3.amazonaws.com/magma/promos/3-slices-jamon.png'
        },
        {
            id : 3,
            name: '1 coca cola + 2 pizzas de pepperoni pequeñas',
            description: 'Promoción disponible todos los días',
            price: 15000,
            image: 'https://ci0137.s3.amazonaws.com/magma/promos/2pizzas%2Bcocacola.png'
        },
        {
            id : 4,
            name: '2x1 en pizzas',
            description: '2 pizzas de Jamón medianas al precio de 1',
            price: 12000,
            image: 'https://ci0137.s3.amazonaws.com/magma/promos/doble-pizza-+jamon.png'
        }
    ]
res.json(combos);
};