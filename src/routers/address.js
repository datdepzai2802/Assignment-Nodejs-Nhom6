import express from "express";
import { create, list, read, remove, update } from "../controllers/address";

const router = express.Router();

router.get('/address', list);
router.get('/address/:id', read)
router.post('/address', create);
router.patch('/address/:id', update);
router.delete('/address/:id', remove);

export default router;