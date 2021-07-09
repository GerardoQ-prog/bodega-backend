const { Sequelize } = require("sequelize");
const { categoriesModel } = require("../models/categories");
const { productsModel } = require("../models/products");
const { salesModel } = require("../models/sales");
const { shopsModel } = require("../models/shops");
const { usersModel } = require("../models/users");

const conexion = new Sequelize("bodega_core", "root", "", {
  host: "localhost",
  dialect: "mysql",
  logging: console.log,
  timezone: "-05:00",
});

const Categories = categoriesModel(conexion);
const Products = productsModel(conexion);
const Sales = salesModel(conexion);
const Shops = shopsModel(conexion);
const Users = usersModel(conexion);

Users.hasMany(Shops, { foreignKey: "userId" });
Shops.belongsTo(Users, { foreignKey: "userId" });

Shops.hasMany(Categories, { foreignKey: "shopId" });
Categories.belongsTo(Shops, { foreignKey: "shopId" });

Categories.hasMany(Products, { foreignKey: "categoryId" });
Products.belongsTo(Categories, { foreignKey: "categoryId" });

Shops.hasMany(Products, { foreignKey: "shopId" });
Products.belongsTo(Shops, { foreignKey: "shopId" });

Products.hasMany(Sales, { foreignKey: "productId" });
Sales.belongsTo(Products, { foreignKey: "productId" });

module.exports = {
  Categories,
  Products,
  Sales,
  Shops,
  Users,
  conexion,
};
