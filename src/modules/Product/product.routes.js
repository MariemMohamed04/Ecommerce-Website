import express from "express"
import { addProduct, getAllProducts, getProductById, getProductByName, editProduct, deleteProduct} from "./product.controller.js";

const productRouter = express.Router();
productRouter
  .route('/')
  .post(addProduct)
  .get(getAllProducts);

productRouter
  .route('/id/:id')
  .get(getProductById)
  .put(editProduct)
  .delete(deleteProduct);

productRouter
  .route('/name/:name')
  .get(getProductByName);

export default productRouter