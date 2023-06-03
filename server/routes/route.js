import express from "express";
import { userRegister, userLogin } from "../controller/User-controller.js";
import { products, product } from "../controller/Product-controller.js";
products;
const router = express.Router();

router.post("/register", userRegister);
router.post("/login", userLogin);
router.get("/products", products);
router.get("/product/:id", product);

export default router;
