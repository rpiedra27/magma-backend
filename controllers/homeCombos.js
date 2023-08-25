
exports.listHomeCombos = async (req, res) => {
    // #swagger.tags = ['HomeCombos']
    const homeCombos = [
        {
            id : 1,
            name: '2 pizzas medianas de jamón + 2 coca colas',
            image: 'https://ci0137.s3.amazonaws.com/magma/promos/Promo-2pizzas-2cocas.png'
        },
        {
            id : 2,
            name: '3 slices de pizza de jamón',
            image: 'https://ci0137.s3.amazonaws.com/magma/promos/3-slices-jamon.png'
        },
        {
            id : 3,
            name: '1 coca cola + 2 pizzas de pepperoni pequeñas',
            image: 'https://ci0137.s3.amazonaws.com/magma/promos/2pizzas%2Bcocacola.png'
        },
        {
            id : 4,
            name: '2x1 en pizzas',
            image: 'https://ci0137.s3.amazonaws.com/magma/promos/doble-pizza-+jamon.png'
        }
    ]
res.json(homeCombos);
};