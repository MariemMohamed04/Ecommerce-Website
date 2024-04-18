import express from "express"
import { addProduct } from "./product.controller.js";

const productRouter = express.Router();
productRouter.route('/products').post(addProduct);

export default productRouter