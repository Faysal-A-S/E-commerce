import express from "express";
import { userRegister, userLogin } from "../controller/User-controller.js";
import { products } from "../controller/Product-controller.js";
products;
const router = express.Router();

router.post("/register", userRegister);
router.post("/login", userLogin);
router.get("/products", products);

export default router;
