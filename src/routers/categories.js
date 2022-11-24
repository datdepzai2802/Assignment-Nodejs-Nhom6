import express from "express";
import { create, list, read, remove, update } from "../controllers/categories";

const router = express.Router();

router.get("/categories", list);
router.get("/categories/:id", read);
router.post("/categories", create);
router.patch("/categories/:id", update);
router.delete("/categories/:id", remove);

export default router;
