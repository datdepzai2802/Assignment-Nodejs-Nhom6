import express from "express";
import { signin, signup, UsersGetAll } from "../controllers/auth";

const router = express.Router();

router.post("/signup", signup);
router.post("/signin", signin);
router.get("/users", UsersGetAll);

export default router;
