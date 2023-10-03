const Order = require("../models/orders");
const asyncHandler = require("express-async-handler");

exports.getOrders = asyncHandler(async (req, res) => {
  /* #swagger.tags = ['Orders']
     #swagger.description = 'Retrieves all the existing orders'
  */
  try {
    const orders = await Order.find().exec();
    res.json(orders);
  } catch (error) {
    res.status(500).send("Could not fetch resource: " + error);
  }
});

exports.createOrder = asyncHandler(async (req, res, next) => {
  /* #swagger.tags = ['Orders']
      #swagger.description = 'Creates a new order'
      #swagger.parameters['obj'] = {
          in: 'body',
          description: 'New orders to be created',
          schema: { $ref: '#/definitions/CreateOrder' }
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
  /* #swagger.tags = ['Orders']
      #swagger.description = 'Updates an existing order'
      #swagger.parameters['obj'] = {
          in: 'body',
          description: 'ID of the order to be updated',
          schema: { $ref: '#/definitions/UpdateOrder' }
  } */
  const orderId = req.path.slice(1);
  const order = new Order({
    user: req.body.user,
    cost: req.body.cost,
    date: req.body.date,
    items: req.body.items,
  });
  try {
    const newOrder = await Order.findByIdAndUpdate(orderId, order).exec();
    res.json(newOrder);
  } catch (err) {
    return next(err);
  }
  res.json(order);
});

exports.deleteOrder = asyncHandler(async (req, res) => {
  /* #swagger.tags = ['Orders']
     #swagger.description = 'Deletes an existing order'
     #swagger.parameters['id'] = { description: 'Id of the order to be deleted' }
  */
  const orderId = req.path.slice(1);
  try {
    await Order.findByIdAndDelete(orderId).exec();
    res.status(204).send();
  } catch (error) {
    res.status(500).send("Could not delete resource " + error);
  }
});
