const Item = require("../models/items");
const asyncHandler = require("express-async-handler");

exports.getAllItems = asyncHandler(async (req, res) => {
  /* #swagger.tags = ['Items']
     #swagger.description = 'Retrieves all the items'
  */
  try {
    const items = await Item.find().exec();
    res.json(items);
  } catch (error) {
    res.status(500).send("Could not fetch resource: " + error);
  }
});

exports.getItemsOfType = asyncHandler(async (req, res) => {
  /* #swagger.tags = ['Items']
     #swagger.description = 'Retrieves all the items of a given type'
     #swagger.parameters['itemType'] = { description: 'The type of items that will be retrieved' }
  */
  const type = req.path.slice(1);
  try {
    const items = await Item.find({ type: type }).exec();
    res.json(items);
  } catch (error) {
    res.status(500).send("Could not fetch resource: " + error);
  }
});

exports.createItem = asyncHandler(async (req, res, next) => {
  /* #swagger.tags = ['Items']
    #swagger.description = 'Creates a new item'
    #swagger.parameters['obj'] = {
        in: 'body',
        description: 'New item to be created',
        schema: { $ref: '#/definitions/CreateItem' }
  } */
  if ((await Item.findOne({ name: req.body.name })) !== null) {
    try {
      const item = new Item({
        name: req.body.name,
        type: req.body.price,
        description: req.body.description,
        price: req.body.price,
        image: req.body.image,
      });
      const newItem = await Item.save(item).exec();
      res.json(newItem);
    } catch (err) {
      return next(err);
    }
  } else {
    res.status(409).send("An item with that name already exists");
  }
});

exports.updateItem = asyncHandler(async (req, res, next) => {
  /* #swagger.tags = ['Items']
     #swagger.description = 'Updates an existing item'
     #swagger.parameters['obj'] = {
        in: 'body',
        description: 'ID of the item to be updated',
        schema: { $ref: '#/definitions/UpdateItem' }
  } */
  const item = new Item({
    name: req.body.name,
    type: req.body.price,
    description: req.body.description,
    price: req.body.price,
    image: req.body.image,
  });
  const itemId = req.path.slice(1);
  try {
    const newItem = await Item.findByIdAndUpdate(itemId, item).exec();
    res.json(newItem);
  } catch (err) {
    return next(err);
  }
  res.json(item);
});

exports.deleteItem = asyncHandler(async (req, res) => {
  /* #swagger.tags = ['Items']
     #swagger.description = 'Deletes an existing item'
     #swagger.parameters['id'] = { description: 'ID of the item to be deleted' }
  */
  const itemId = req.path.slice(1);
  try {
    await Item.findByIdAndDelete(itemId).exec();
    res.status(204).send();
  } catch (error) {
    res.status(500).send("Could not delete resource " + error);
  }
});
