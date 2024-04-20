import express from "express"
import { 
  addSeller, 
  getAllSeller, 
  getSellerById, 
  getSellerByName, 
  editSellerName, 
  deleteSeller,
  addProductToSeller,
  getSellerProducts
} from "./seller.controller.js";

const sellerRouter = express.Router();
sellerRouter
  .route('/')
  .post(addSeller)
  .get(getAllSeller);

sellerRouter
  .route('/:sellerId')
  // .get(getSellerById)
  .put(editSellerName)
  .delete(deleteSeller)
  .post(addProductToSeller)
  .get(getSellerProducts);

sellerRouter
  .route('/:name')
  .get(getSellerByName);

// Seller + Products
sellerRouter
  .route('/')
  .post(addSeller)
  // .post(addProductToSeller)
  // .get(getSellerProducts);

export default sellerRouter