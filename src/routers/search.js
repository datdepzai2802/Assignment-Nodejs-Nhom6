import express from "express";
import { listSearch } from "../controllers/search";

const router = express.Router();

router.get("/", listSearch);

export default router;
