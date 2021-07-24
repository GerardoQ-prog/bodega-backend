const { Router } = require("express");
const { productsRouter } = require("./products");
const { categoriesRouter } = require("./categories");
const { usersRouter } = require("./users");
const { authRouter } = require("./auth");
const { shopsRouter } = require("./shops");
const { salesRouter } = require("./sales");
const { inventoriesRouter } = require("./inventories");

const routes = Router();

routes.use("", productsRouter);
routes.use("", categoriesRouter);
routes.use("", usersRouter);
routes.use("", authRouter);
routes.use("", shopsRouter);
routes.use("", salesRouter);
routes.use("", inventoriesRouter);

module.exports = { routes };
