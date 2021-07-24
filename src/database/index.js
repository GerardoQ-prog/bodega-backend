const { Sequelize } = require("sequelize");
const { categoriesModel } = require("../models/categories");
const { productsModel } = require("../models/products");
const { salesModel } = require("../models/sales");
const { shopsModel } = require("../models/shops");
const { usersModel } = require("../models/users");
const { inventoriesModel } = require("../models/inventories");
const { inventoriesProductsModel } = require("../models/inventories-products");

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
const Inventories = inventoriesModel(conexion);
const InventoriesProducts = inventoriesProductsModel(conexion);

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

Categories.hasMany(Inventories, { foreignKey: "categoryId" });
Inventories.belongsTo(Categories, { foreignKey: "categoryId" });

Shops.hasMany(Inventories, { foreignKey: "shopId" });
Inventories.belongsTo(Shops, { foreignKey: "shopId" });

Products.hasMany(InventoriesProducts, { foreignKey: "productId" });
InventoriesProducts.belongsTo(Products, { foreignKey: "productId" });

module.exports = {
  Categories,
  Products,
  Sales,
  Shops,
  Users,
  Inventories,
  InventoriesProducts,
  conexion,
};
