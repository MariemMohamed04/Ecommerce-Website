import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  // productId: {
  //   type: Number,
  //   unique: true,
  //   required: true
  // },
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
  desc: String,
  photo: String,
  seller: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Seller',
    required: true
  },
  creationDate: {
    type: Date,
    default: Date.now
  }
}, {
  timestamps: true
});

export const productModel = mongoose.model('product', productSchema);