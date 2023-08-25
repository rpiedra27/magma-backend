
exports.listHomePizzas = async (req, res) => {
    // #swagger.tags = ['HomePizzas']
    const homePizzas = [
        {
            id:1,
            name:'Pizza clásica de jamón',
            image: 'https://ci0137.s3.amazonaws.com/magma/pizzas/p%C3%ACzza_jam%C3%B3n.png'
        },
        {
            id:2,
            name:'Pizza clásica de pepperoni',
            image: 'https://ci0137.s3.amazonaws.com/magma/pizzas/pizza_pepperoni.png'
        },
        {
            id:3,
            name:'Pizza innovadora texana',
            image: 'https://ci0137.s3.amazonaws.com/magma/pizzas/pizza_texana.png'
        },
        {
            id:5,
            name:'Pizza caótica',
            image: 'https://ci0137.s3.amazonaws.com/magma/pizzas/pizza_ca%C3%B3tica.png'
        }
    ]
res.json(homePizzas);
};