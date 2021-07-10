const { Router } = require("express");
const { authenticateUser, registerUser } = require("../controllers/users");

let authRouter = Router();

authRouter.post("/auth", authenticateUser);
authRouter.post("/register", registerUser);

module.exports = { authRouter };
