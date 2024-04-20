import { productModel } from './../../../database/models/product.model.js';
import slugify from "slugify"

const addProduct = async (req, res, next) => {
  try {
    const { products } = req.body;
    for (let product of products) {
      const { name, desc, seller, photo, creationDate } = product;
      if (typeof name !== 'string') {
        throw new Error('Product name must be a string');
      }
      product.slug = slugify(name);
      const newProduct = new productModel(product);
      await newProduct.save();
    }
    res.json({
      message: 'success',
      products: products.map(({ name, desc, seller, photo, creationDate }) => ({ name, desc, seller, photo, creationDate })),
    });
  } catch (error) {
    next(error);
  }
};

const getAllProducts = async(req, res, next) => {
  let products = await productModel.find();
  res.json({
    message: "success", products
  });
}

const getProductById = async(req, res, next) => {
  let product = await productModel.findById(req.params.id);
  res.json({
    message: "success", product
  });
}

const getProductByName = async (req, res, next) => {
  
  const productName = req.params.name;
  console.log(productName);
  const product = await productModel.findOne({ name: productName });
  if (!product) {
    return res.status(404).json({ message: 'Product not found' });
  }
  res.json({
    message: "success", product
  });
}

const editProduct = async (req, res, next) => {
  try {
    const { name, desc, seller, photo, creationDate } = req.body;
    req.body.slug = slugify(name);
    const updatedProduct = await productModel.findByIdAndUpdate(
      req.params.id,
      { name, desc, seller, photo, creationDate },
      { new: true }
    );
    if (!updatedProduct) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.json({ message: 'success', product: updatedProduct });
  } catch (error) {
    next(error);
  }
};

const deleteProduct = async(req, res, next) => {
  let product = await productModel.findByIdAndDelete(req.params.id);
  res.json({
    message: "success", product
  });
}

export {
  addProduct,
  getAllProducts,
  getProductById,
  getProductByName,
  editProduct,
  deleteProduct
}