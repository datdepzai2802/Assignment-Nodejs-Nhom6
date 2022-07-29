import express from "express";
import { create, list, read, remove, update } from "../controllers/categories";

const router = express.Router();

router.get('/category', list);
router.get('/category/:id', read);
router.post('/category', create);
router.patch('/category/:id', update);
router.delete('/category/:id', remove);

export default router;