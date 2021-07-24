const { Router } = require("express");
const {
  getSales,
  setSales,
  setSalesGroupByShop,
  getSalesByShop,
  getSalesBySaleId,
  getSalesByDay,
} = require("../controllers/sales");

let salesRouter = Router();

salesRouter.post("/sales", setSales);
salesRouter.get("/sales", getSales);
salesRouter.get("/sales-shop/:shopId", getSalesByShop);
salesRouter.post("/sales-shop", setSalesGroupByShop);
salesRouter.post("/sales-day", getSalesByDay);
salesRouter.get("/sale/:saleId", getSalesBySaleId);

module.exports = { salesRouter };
