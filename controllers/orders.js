const Order = require("../models/orders");
const asyncHandler = require("express-async-handler");

exports.getOrders = asyncHandler(async (req, res) => {
  // #swagger.tags = ['Ingredients']
  try {
    const orders = await Order.find().exec();
    res.json(orders);
  } catch (error) {
    res.status(500).send("Could not fetch resource: " + error);
  }
});

exports.createOrder = asyncHandler(async (req, res, next) => {
  // #swagger.tags = ['Order']
  /*  #swagger.parameters['obj'] = {
          in: 'body',
          description: 'Create an order placed by a customer',
          schema: { $ref: '#/definitions/createOrder' }
  } */
  try {
    const order = new Order({
      user: req.body.user,
      cost: req.body.cost,
      date: req.body.date,
      items: req.body.items,
    });
    const newOrder = await Order.save(order).exec();
    res.json(newOrder);
  } catch (err) {
    return next(err);
  }
});

exports.updateOrder = asyncHandler(async (req, res, next) => {
  // #swagger.tags = ['Orders']
  const order = new Order({
    user: req.body.user,
    cost: req.body.cost,
    date: req.body.date,
    items: req.body.items,
  });
  try {
    const newOrder = await Order.findByIdAndUpdate(req.params.id, order).exec();
    res.json(newOrder);
  } catch (err) {
    return next(err);
  }
  res.json(order);
});

exports.deleteOrder = asyncHandler(async (req, res) => {
  // #swagger.tags = ['Orders']
  try {
    await Order.findByIdAndDelete(req.params.id).exec();
    res.status(204).send();
  } catch (error) {
    res.status(500).send("Could not delete resource " + error);
  }
});
