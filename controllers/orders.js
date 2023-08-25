exports.createOrder = async (req, res) => {
  // #swagger.tags = ['Order']
  /*  #swagger.parameters['obj'] = {
          in: 'body',
          description: 'Create an order placed by a customer',
          schema: { $ref: '#/definitions/createOrder' }
  } */
  try {
    const userPayload = req.body;
    
    res.json(userPayload);
  } catch (error) {
    res.status(500).json({
      message:
        "Ocurrió un error al crear la orden",
      error,
    });
  }
};