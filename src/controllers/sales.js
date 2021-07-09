const { Sales, Products } = require("../database");

const setSales = async (req, res) => {
  try {
    const body = req.body;
    console.log(body);
    const data = await Sales.create(body);
    res.status(200).json({
      data,
      code: 200,
      message: "Solicitud Exitosa",
    });
  } catch (error) {
    res.status(500).json({
      code: 500,
      message: "Error al obterner tipos de setSales",
    });
  }
};

const setSalesGroupByShop = async (req, res) => {
  try {
    const body = req.body;
    let newData = [];
    for (let item of body.sales) {
      const data = await Sales.create(item);
      const dataProduct = await Products.update(
        { quantity: body.quantityCurrent },
        { where: { id: body.productId } }
      );
      newData.push(data);
    }
    res.status(200).json({
      data: newData,
      code: 200,
      message: "Solicitud Exitosa",
    });
  } catch (error) {
    res.status(500).json({
      code: 500,
      message: "Error al obterner tipos de setSales",
    });
  }
};

const getSales = async (req, res) => {
  try {
    const data = await Sales.findAll();
    console.log(data);
    res.status(200).json({
      data,
      response: {
        code: 200,
        message: "Solicitud Exitosa",
      },
    });
  } catch (error) {
    res.status(500).json({
      response: {
        code: 500,
        message: "Error al obterner tipos de getSales",
      },
    });
  }
};

const getSalesByShop = async (req, res) => {
  try {
    const { shopId } = req.params;
    const data = await Sales.findAll({ where: { shopId } });
    console.log(data);
    res.status(200).json({
      data,
      response: {
        code: 200,
        message: "Solicitud Exitosa",
      },
    });
  } catch (error) {
    res.status(500).json({
      response: {
        code: 500,
        message: "Error al obterner tipos de getSales",
      },
    });
  }
};

module.exports = {
  setSales,
  getSales,
  setSalesGroupByShop,
  getSalesByShop,
};
