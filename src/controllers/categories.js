const { Categories } = require("../database");

const setCategories = async (req, res) => {
  try {
    const body = req.body;
    console.log("BODY", body);
    if (!body.name) {
      res.status(404).json({
        code: 500,
        message: "Falta el name",
      });
    } else {
      const data = await Categories.create(body);
      res.status(200).json({
        data,
        code: 200,
        message: "Solicitud Exitosa",
      });
    }
  } catch (error) {
    res.status(500).json({
      response: {
        code: 500,
        message: "Error al obterner tipos de setCategories",
      },
    });
  }
};

const getCategories = async (req, res) => {
  try {
    const data = await Categories.findAll();
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
        message: "Error al obterner tipos de getCategories",
      },
    });
  }
};

const getCategoriesByShop = async (req, res) => {
  try {
    const { shopId } = req.query;
    const data = await Categories.findAll({ where: { shopId } });
    console.log(data);
    res.status(200).json({
      data,
      code: 200,
      message: "Solicitud Exitosa",
    });
  } catch (error) {
    res.status(500).json({
      code: 500,
      message: "Error al obterner tipos de getCategories",
    });
  }
};

const getCategoriesById = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await Categories.findOne({ where: { id } });
    console.log(data);
    res.status(200).json({
      data,
      code: 200,
      message: "Solicitud Exitosa",
    });
  } catch (error) {
    res.status(500).json({
      code: 500,
      message: "Error al obterner tipos de getCategoriesById",
    });
  }
};

module.exports = {
  setCategories,
  getCategories,
  getCategoriesByShop,
  getCategoriesById,
};
