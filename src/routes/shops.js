const { Router } = require("express");
const { setShops, getShopByUser } = require("../controllers/shops");

let shopsRouter = Router();

shopsRouter.post("/shops", setShops);
shopsRouter.get("/shop-user?:userId", getShopByUser);

module.exports = { shopsRouter };
