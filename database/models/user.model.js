import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "name is required"],
    minLength: 2,
    maxLength: 15,
    trim: true
  },
  slug: {
    type: String,
    lowercase: true
  },
  email: {
    type: String,
    required: [true, "email is required"],
    unique: [true, "email is unique"],
    trim: true,
    lowercase: true
  },
  password: {
    type: String,
    required: [true, "password is required"],
  },
  age: {
    type: Number,
    min: [10, 'Too Young'],
    max: [80, 'Too Old']
  },
  role: {
    type: String,
    enum: ['user', 'admin'],
    default: 'user'
  },
  orders: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Order'
  }]
}, {
  timestamps: true
});

export const userModel = mongoose.model('user', userSchema);
