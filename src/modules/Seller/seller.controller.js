import { sellerModel } from './../../../database/models/seller.model.js';
import { productModel } from './../../../database/models/product.model.js';
import slugify from "slugify";
import mongoose from 'mongoose';

const addSeller = async (req, res, next) => {
  req.body.slug = slugify(req.body.name);
  let seller = new sellerModel(req.body);
  await seller.save();
  res.json({
    message: "Seller added Successfully", seller
  });
};

const getAllSeller = async(req, res, next) => {
  let sellers = await sellerModel.find();
  res.json({
    message: "All Sellers", sellers
  });
};

const getSellerById = async(req, res, next) => {
  let seller = await sellerModel.findById({ sellerId });
  res.json({
    message: "success", seller
  });
};

const getSellerByName = async (req, res, next) => {
  const sellerName = req.params.name;
  console.log(sellerName);
  const seller = await sellerModel.findOne({ name: sellerName });
  if (!seller) {
    return res.status(404).json({ message: 'seller not found' });
  }
  res.json({
    message: "success", seller
  });
};

const editSellerName = async(req, res, next) => {
  req.body.slug = slugify(req.body.name);
  let seller = await sellerModel.findByIdAndUpdate({ sellerId }, req.body, { new: true });
  res.json({
    message: "New Seller Name", seller
  });
};

const deleteSeller = async(req, res, next) => {
  let seller = await sellerModel.findByIdAndDelete({ sellerId });
  res.json({
    message: "Removed Seller", seller
  });
};

// Seller + Products
const addProductToSeller = async (req, res, next) => {
  const { sellerId } = req.params;
  const { name, desc, photo } = req.body.products[0];
  const slug = slugify(name);
  try {
    const product = new productModel({
      name,
      desc,
      photo,
      seller: new mongoose.Types.ObjectId(sellerId),
      slug
    });
    await product.save();
    const seller = await sellerModel.findById(sellerId);
    seller.products.push(product);
    await seller.save();
    res.json({ message: "Product added to seller successfully", product });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};



const getSellerProducts = async (req, res, next) => {
  const { seller_Id } = req.params;
  try {
    const seller = await sellerModel.findById(seller_Id).populate('products');
    res.json({ message: "Seller products retrieved successfully", products: seller.products });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


export {
  addSeller,
  getAllSeller,
  getSellerById,
  getSellerByName,
  editSellerName,
  deleteSeller,
  addProductToSeller,
  getSellerProducts
}