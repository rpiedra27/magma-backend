const Item = require("../models/items");
const asyncHandler = require("express-async-handler");

exports.getAllItems = asyncHandler(async (req, res) => {
  try {
    const items = await Item.find().exec();
    res.json(items);
  } catch (error) {
    res.status(500).send("Could not fetch resource: " + error);
  }
});

exports.getItems = asyncHandler(async (req, res) => {
  const resource = req.path.slice(1);
  try {
    const items = await Item.find({ type: resource }).exec();
    res.json(items);
  } catch (error) {
    res.status(500).send("Could not fetch resource: " + error);
  }
});

exports.createItem = asyncHandler(async (req, res, next) => {
  // #swagger.tags = ['Items']
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
  const item = new Item({
    name: req.body.name,
    type: req.body.price,
    description: req.body.description,
    price: req.body.price,
    image: req.body.image,
  });
  try {
    const newItem = await Item.findByIdAndUpdate(req.params.id, item).exec();
    res.json(newItem);
  } catch (err) {
    return next(err);
  }
  res.json(item);
});

exports.deleteItem = asyncHandler(async (req, res) => {
  try {
    await Item.findByIdAndDelete(req.params.id).exec();
    res.status(204).send();
  } catch (error) {
    res.status(500).send("Could not delete resource " + error);
  }
});
