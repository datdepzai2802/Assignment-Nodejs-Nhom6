import express from "express";
import { UsersGetAll, UsersRemove } from "../controllers/users";
import { checkAdmin, veryfiToken } from "../middlewares/checkAuth";

const router = express.Router();

router.get("/users", UsersGetAll);
router.get("/users");
router.post("/users");
router.patch("/users");
router.delete("/users/:id", UsersRemove);

export default router;
