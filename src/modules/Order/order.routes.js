import express from "express"
import { 
  addOrder,
  getAllOrders,
  getOrderById,
  getOrderByUser,
  editOrder,
  deleteOrder,
} from "./order.controller.js";

const orderRouter = express.Router();
orderRouter
  .route('/')
  .post(addOrder)
  .get(getAllOrders);

orderRouter
  .route('/id/:id')
  .get(getOrderById)
  .put(editOrder)
  .delete(deleteOrder);

orderRouter
  .route('/name/:name')
  .get(getProductByName);

export default orderRouter