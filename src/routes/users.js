const { Router } = require("express");
const { getUsers, setUser } = require("../controllers/users");

let usersRouter = Router();

usersRouter.post("/users", setUser);
usersRouter.get("/users", getUsers);

module.exports = { usersRouter };
