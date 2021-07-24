const { Inventories, InventoriesProducts, Products } = require("../database");

const setInventories = async (req, res) => {
  try {
    const body = req.body;
    const data = await Inventories.create(body);
    const dataProducts = await Products.findAll({
      where: { shopId: body.shopId, categoryId: body.categoryId },
    });
    for (let item of dataProducts) {
      await InventoriesProducts.create({
        inventorieId: body.inventorieId,
        quantityCurrent: item.quantity,
        productId: item.id,
      });
    }
    res.status(200).json({
      data: data,
      code: 200,
      message: "Solicitud Exitosa",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      code: 500,
      message: "Error al obterner tipos de setInventories",
    });
  }
};

const getInventories = async (req, res) => {
  try {
    const data = await Inventories.findAll();
    res.status(200).json({
      data,
      code: 200,
      message: "Solicitud Exitosa",
    });
  } catch (error) {
    res.status(500).json({
      code: 500,
      message: "Error al obterner tipos de getInventories",
    });
  }
};

const getInventoriesByShop = async (req, res) => {
  try {
    const { shopId } = req.params;
    const data = await Inventories.findAll({ where: { shopId } });
    res.status(200).json({
      data: data,
      code: 200,
      message: "Solicitud Exitosa",
    });
  } catch (error) {
    res.status(500).json({
      code: 500,
      message: "Error al obterner tipos de getInventoriesByShop",
    });
  }
};

const getInventoriesByInventorieId = async (req, res) => {
  try {
    const { inventorieId } = req.params;
    const data = await Inventories.findOne({ where: { inventorieId } });
    res.status(200).json({
      data: data,
      code: 200,
      message: "Solicitud Exitosa",
    });
  } catch (error) {
    res.status(500).json({
      code: 500,
      message: "Error al obterner tipos de getInventoriesByInventorieId",
    });
  }
};

const getProductsByInventorie = async (req, res) => {
  try {
    const { inventorieId } = req.params;
    const data = await InventoriesProducts.findAll({ where: { inventorieId } });
    res.status(200).json({
      data: data,
      code: 200,
      message: "Solicitud Exitosa",
    });
  } catch (error) {
    res.status(500).json({
      code: 500,
      message: "Error al obterner tipos de getProductsByInventorie",
    });
  }
};

const putProductsByInventorie = async (req, res) => {
  try {
    const body = req.body;
    for (let item of body.products) {
      await InventoriesProducts.update(
        { quantityReal: item.quantityReal },
        {
          where: { productId: item.productId, inventorieId: item.inventorieId },
        }
      );
      await Products.update(
        { quantity: item.quantityReal },
        { where: { id: item.productId } }
      );
    }
    res.status(200).json({
      code: 200,
      message: "Solicitud Exitosa",
    });
  } catch (error) {
    res.status(500).json({
      code: 500,
      message: "Error al obterner tipos de putProductsByInventorie",
    });
  }
};

const putStatusInventorie = async (req, res) => {
  try {
    const body = req.body;
    await Inventories.update(
      { status: body.status },
      {
        where: {
          inventorieId: body.inventorieId,
        },
      }
    );
    res.status(200).json({
      code: 200,
      message: "Solicitud Exitosa",
    });
  } catch (error) {
    res.status(500).json({
      code: 500,
      message: "Error al obterner tipos de putStatusInventorie",
    });
  }
};

module.exports = {
  setInventories,
  getInventories,
  getProductsByInventorie,
  getInventoriesByShop,
  getInventoriesByInventorieId,
  putProductsByInventorie,
  putStatusInventorie,
};
