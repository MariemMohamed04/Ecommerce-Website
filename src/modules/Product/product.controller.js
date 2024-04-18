import { productModel } from './../../../database/models/product.model.js';
import slugify from "slugify"

const addProduct = async(req, res, next) => {

  req.body.slug = slugify(req.body.name);
  let product = new productModel(req.body);
  console.log(product);
  await product.save();

  res.json({
    message: "success", product
  });
}

export {
  addProduct
}