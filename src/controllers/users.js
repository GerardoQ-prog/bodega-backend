const { Users } = require("../database");
const bcrypt = require("bcrypt");

const setUser = async (req, res) => {
  try {
    let body = req.body;
    console.log(body);
    if (!body.firstname) {
      res.status(500).json({
        code: 500,
        message: "Falta el name",
      });
    } else {
      const newPwd = await bcrypt.hash(body.password, 10);
      body.password = newPwd;
      console.log("body", body);
      const data = await Users.create(body);
      res.status(200).json({
        code: 200,
        data,
        message: "Solicitud Exitosa",
      });
    }
  } catch (error) {
    res.status(500).json({
      code: 500,
      message: "Error al obterner tipos de setUser",
    });
  }
};

const getUsers = async (req, res) => {
  try {
    const data = await Users.findAll();
    console.log(data);
    res.status(200).json({
      data,
      code: 200,
      message: "Solicitud Exitosa",
    });
  } catch (error) {
    res.status(500).json({
      code: 500,
      message: "Error al obterner tipos de getUsers",
    });
  }
};

const getUsersByEmail = async (email) => {
  try {
    const data = await Users.findOne({ where: { email } });
    console.log("dataaaaaaa", data);
    return data;
  } catch (error) {}
};

const authenticateUser = async (req, res) => {
  try {
    let body = req.body;
    const dataUser = await getUsersByEmail(body.email);
    if (dataUser) {
      console.log(body.password);
      console.log(dataUser.password);
      const comparePwd = bcrypt.compare(body.password, dataUser.password);
      console.log("compare", comparePwd);
      if (comparePwd) {
        res.status(200).json({
          data: dataUser,
          code: 200,
          message: "Solicitud Exitosa",
        });
      } else {
        res.status(404).json({
          response: {
            code: 404,
            message: "Contraseña incorrecta",
          },
        });
      }
    } else {
      res.status(404).json({
        response: {
          code: 404,
          message: "Usuario no existente",
        },
      });
    }
  } catch (error) {
    res.status(500).json({
      response: {
        code: 500,
        message: error,
      },
    });
  }
};

module.exports = {
  setUser,
  getUsers,
  authenticateUser,
};
