const { Router } = require("express");
const { getUsers, setUser, authenticateUser } = require("../controllers/users");

let authRouter = Router();

authRouter.post("/auth", authenticateUser);

module.exports = { authRouter };
