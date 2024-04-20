import mongoose from "mongoose";

const schema = new mongoose.Schema({
  products: [{ 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Product', 
    required: true 
  }],
  user: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'User', 
    required: true }
}, {
  timestamps: true
});

export const orderModel = mongoose.model('order', schema);






