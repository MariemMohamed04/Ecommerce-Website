import { orderModel } from "./../../../database/models/order.model.js";
import { userModel } from "./../../../database/models/user.model.js";
import slugify from "slugify";

const addOrder = async (req, res, next) => {
  try {
    const newOrder = await Orders.create(orderData);
    res.status(201).json(newOrder);
    res.json({
      message: "success",
      orders,
    });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const getAllOrders = async (req, res, next) => {
  try {
    let orders = await orderModel.find();
    if (orders.length > 0) {
      res.json({ message: "success", orders });
    } else {
      res.json({ message: "no orders", orders });
    }
  } catch (error) {
    console.error("Error:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const getOrderById = async (req, res, next) => {
  try {
    let order = await orderModel.findById(req.params.id);
    if (!order) {
      return res.status(404).json({
        error: "Not Found",
      });
    }
    res.json({
      message: "success",
      order,
    });
  } catch (error) {
    console.error("Error:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const getOrderByUser = async (req, res, next) => {
  try {
    const userId = req.params.userId;
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    const orders = await orderModel.find({ user: userId });
    res.json({ message: "success", orders });
  } catch (error) {
    console.error("Error:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const editOrder = async (req, res, next) => {
  const updatedData = req.body;
  const orderId = req.params.id;
  try {
    await Orders.updateOne({ _id: orderId }, updatedData);
    const updatedOrder = await Orders.findById(orderId);
    res
      .status(200)
      .json({ message: "Order updated successfully", updatedOrder });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const deleteOrder = async (req, res, next) => {
  const order = req.params.id;
  try {
    await Orders.deleteOne({ _id: order });
    res.status(200).json({ message: "Order deleted successfully" });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export {
  addOrder,
  getAllOrders,
  getOrderById,
  getOrderByUser,
  editOrder,
  deleteOrder,
};
