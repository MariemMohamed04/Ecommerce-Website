import mongoose from "mongoose";

const schema = new mongoose.Schema({
  name: {
    type: String,
    unique: [true, 'Name is Required'],
    trim: true,
    required: true,
    minlength: [2, 'Too Short']
  },
  slug: {
    type: String,
    lowercase: true,
    required: true
  },
  products: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Product' 
  }
}, {
  timestamps: true
});

export const sellerModel = mongoose.model('seller', schema);






