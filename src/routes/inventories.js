const { Router } = require("express");
const {
  setInventories,
  getInventories,
  getInventoriesByShop,
  getProductsByInventorie,
  getInventoriesByInventorieId,
  putProductsByInventorie,
  putStatusInventorie,
} = require("../controllers/inventories");

let inventoriesRouter = Router();

inventoriesRouter.post("/inventories", setInventories);
inventoriesRouter.get("/inventories", getInventories);
inventoriesRouter.get(
  "/inventories/:inventorieId",
  getInventoriesByInventorieId
);
inventoriesRouter.get("/inventories-shop/:shopId", getInventoriesByShop);
inventoriesRouter.get(
  "/inventories-products/:inventorieId",
  getProductsByInventorie
);
inventoriesRouter.put("/inventories-products", putProductsByInventorie);
inventoriesRouter.put("/inventories", putStatusInventorie);

module.exports = { inventoriesRouter };
