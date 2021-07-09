const { Products } = require("../database");

const setProducts = async (req, res) => {
  try {
    const body = req.body;
    console.log(body);
    const data = await Products.create(body);
    res.status(200).json({
      data,
      code: 200,
      message: "Solicitud Exitosa",
    });
  } catch (error) {
    res.status(500).json({
      code: 500,
      message: "Error al obterner tipos de setProducts",
    });
  }
};

const getProducts = async (req, res) => {
  try {
    const data = await Products.findAll();
    console.log(data);
    res.status(200).json({
      data,
      code: 200,
      message: "Solicitud Exitosa",
    });
  } catch (error) {
    res.status(500).json({
      code: 500,
      message: "Error al obterner tipos de getProducts",
    });
  }
};

const getProductsByName = async (req, res) => {
  try {
    const body = req.body;
    const data = await Products.findAll({ where: { shopId: body.shopId } });
    const newData = data.filter(
      (item) => item.name.toLowerCase().indexOf(body.name.toLowerCase()) > -1
    );
    res.status(200).json({
      data: newData,
      code: 200,
      message: "Solicitud Exitosa",
    });
  } catch (error) {
    res.status(500).json({
      code: 500,
      message: "Error al obterner tipos de getProductsByName",
    });
  }
};

const getProductsByShop = async (req, res) => {
  try {
    const { shopId } = req.query;
    const data = await Products.findAll({ where: { shopId } });
    console.log(data);
    res.status(200).json({
      data,
      code: 200,
      message: "Solicitud Exitosa",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      code: 500,
      message: "Error al obterner tipos de getProductsByShop",
    });
  }
};

const putProducts = async (req, res) => {
  try {
    const { shopId } = req.body;
    const { productId } = req.body;
    const body = req.body;
    const data = await Products.update(
      { price: body.price, quantity: body.quantity },
      { where: { shopId, id: productId } }
    );
    console.log(data);
    res.status(200).json({
      code: 200,
      message: "Solicitud Exitosa",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      code: 500,
      message: "Error al obterner tipos de putProducts",
    });
  }
};

const deleteProducts = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await Products.destroy({ where: { id } });
    console.log(data);
    res.status(200).json({
      code: 200,
      message: "Solicitud Exitosa",
    });
  } catch (error) {
    console.log("errror", error);
    res.status(500).json({
      code: 500,
      message: "Error al obterner tipos de deleteProducts",
    });
  }
};

module.exports = {
  setProducts,
  getProducts,
  getProductsByShop,
  putProducts,
  deleteProducts,
  getProductsByName,
};
