import express from "express";
import { create, list, read, remove, update } from "../controllers/detailAddress";

const router = express.Router();

router.get('/detail_address', list);
router.get('/detail_address/:id', read)
router.post('/detail_address', create);
router.patch('/detail_address/:id', update);
router.delete('/detail_address/:id', remove);

export default router;