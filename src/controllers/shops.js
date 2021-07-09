const { Shops } = require("../database");

const setShops = async (req, res) => {
  try {
    const body = req.body;
    console.log(body);
    const data = await Shops.create(body);
    res.status(200).json({
      data,
      code: 200,
      message: "Solicitud Exitosa",
    });
  } catch (error) {
    res.status(500).json({
      code: 500,
      message: "Error al obterner tipos de setShops",
    });
  }
};

const getShops = async (req, res) => {
  try {
    const data = await Shops.findAll();
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
        message: "Error al obterner tipos de getShops",
      },
    });
  }
};

const getShopByUser = async (req, res) => {
  try {
    const { userId } = req.query;
    const data = await Shops.findOne({ where: { userId } });
    console.log(data);
    res.status(200).json({
      data,
      code: 200,
      message: "Solicitud Exitosa",
    });
  } catch (error) {
    res.status(500).json({
      response: {
        code: 500,
        message: "Error al obterner tipos de getShops",
      },
    });
  }
};

module.exports = {
  setShops,
  getShops,
  getShopByUser,
};
