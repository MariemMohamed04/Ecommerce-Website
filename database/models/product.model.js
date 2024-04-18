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
  desc: String,
  photo: String,
  seller: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Seller' 
  },
  creationDate: {
    type: Date,
    default: Date.now
  }
}, {
  timestamps: true
});

export const productModel = mongoose.model('product', schema);






