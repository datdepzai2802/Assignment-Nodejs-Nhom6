import express from "express";
import { list, read, create, update, remove} from "../controllers/products";
import {userById} from "../controllers/users";
import { isAdmin, isAuth, requireSignin } from "../middlewares/checkAuth";


const router = express.Router();

router.get('/products', list);
router.get('/products/:id', read);
router.post('/products/:userId', requireSignin, isAuth, isAdmin, create);
router.patch('/products/:id', update);
router.delete('/products/:id', remove);

router.param("userId", userById)

export default router;