const { Router } = require("express");
const {
  getCategories,
  setCategories,
  getCategoriesByShop,
  getCategoriesById,
} = require("../controllers/categories");

let categoriesRouter = Router();

categoriesRouter.post("/categories", setCategories);
categoriesRouter.get("/categories", getCategories);
categoriesRouter.get("/category/:id", getCategoriesById);
categoriesRouter.get("/categories-shop?:shopId", getCategoriesByShop);

module.exports = { categoriesRouter };
