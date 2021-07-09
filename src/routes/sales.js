const { Router } = require("express");
const {
  getSales,
  setSales,
  setSalesGroupByShop,
  getSalesByShop,
} = require("../controllers/sales");

let salesRouter = Router();

salesRouter.post("/sales", setSales);
salesRouter.get("/sales", getSales);
salesRouter.get("/sales-shop/:shopId", getSalesByShop);
salesRouter.post("/sales-shop", setSalesGroupByShop);

module.exports = { salesRouter };
