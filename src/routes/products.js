const { Router } = require("express");
const {
  getProducts,
  setProducts,
  getProductsByShop,
  getProductsByName,
  putProducts,
  deleteProducts,
  getProductsById,
} = require("../controllers/products");

let productsRouter = Router();

productsRouter.post("/products", setProducts);
productsRouter.post("/products-search", getProductsByName);
productsRouter.get("/products", getProducts);
productsRouter.get("/product/:productId", getProductsById);
productsRouter.get("/product-shop?:shopId", getProductsByShop);
productsRouter.put("/products", putProducts);
productsRouter.delete("/products/:id", deleteProducts);

module.exports = { productsRouter };
