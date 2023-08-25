
exports.listIngredients = async (req, res) => {
    // #swagger.tags = ['Ingredients']
    const ingredients = {
      "sizes" : [
        {
            label: "Pequeña",
            price: 1000,
            value: "pequeña"
        },
        {
            label: "Mediana",
            price: 2000,
            value: "mediana"
        },
        {
            label: "Grande",
            price: 3000,
            value: "grande"

        },
        {
            label: "Monstruo",
            price: 4000,
            value: "monstruo"
        }
      ],
      "sauces" : [
        {
            label: "Tomate",
            price: 200,
            value: "tomate"
        },
        {
            label: "Picante",
            price: 400,
            value: "picante"
        },
        {
            label: "BBQ",
            price: 400,
            value: "bbq"
        }
      ],
      "cheeses" : [
        {
            label: "Goda",
            price: 300,
            value: "Goda"
        },
        {
            label: "Parmesano",
            price: 400,
            value: "parmesano"
        },
        {
            label: "Mozzarella",
            price: 400,
            value: "Mozzarella"
        }
      ],
      "meats" : [
        {
            label: "Jamón",
            price: 100,
            value: "jamón"
        },
        {
            label: "Tocineta",
            price: 200,
            value: "tocineta"
        },
        {
            label: "Carne molida",
            price: 200,
            value: "carne molida"
        },
        {
            label: "Pepperoni",
            price: 300,
            value: "pepperoni"
        },
        {
            label: "Pollo",
            price: 200,
            value: "pollo"
        },
        {
            label: "Salchicha",
            price: 250,
            value: "salchicha"
        }
      ],
      "vegetables" : [
        {
            label: "Cebolla",
            price: 50,
            value: "cebolla"
        },
        {
            label: "Chile",
            price: 50,
            value: "chile"
        },
        {
            label: "Aceitunas",
            price: 100,
            value: "aceitunas"
        },
        {
            label: "Hongos",
            price: 100,
            value: "hongos"
        },
        {
            label: "Rodajas de tomate",
            price: 50,
            value: "rodajas de tomate"
        },
        {
            label: "Piña",
            price: 10000,
            value: "piña"
        }
      ],
      "extras" : [
        {
            label: "Queso extra",
            price: 300,
            value: "queso"
        },
        {
            label: "Salsa extra",
            price: 200,
            value: "salsa"
        }  
      ]
    }
  
    res.json(ingredients);
  };