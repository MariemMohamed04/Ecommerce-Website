import mongoose from "mongoose";

const sellerSchema = new mongoose.Schema({
  sellerId: {
    type: Number,
    unique: true,
    required: true
  },
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
  products: [{ 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Product' 
  }]
}, {
  timestamps: true
});

export const sellerModel = mongoose.model('seller', sellerSchema);