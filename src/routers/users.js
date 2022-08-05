import express from "express";
import { create, update, UsersGetAll, UsersGetOne, UsersRemove } from "../controllers/users";


const router = express.Router();

router.get("/users", UsersGetAll);
router.get("/users/:id", UsersGetOne);
router.post("/users", create);
router.patch("/users/:id", update);
router.delete("/users/:id", UsersRemove);

export default router;
