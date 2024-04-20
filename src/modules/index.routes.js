import { globalError } from "../middleware/globalError.js";
import productRouter from "./Product/product.routes.js";
import sellerRouter from "./Seller/seller.routes.js";
import userRouter from "./User/user.routes.js";

export const productsRoutings = (app) => {
  app.use('/api/v1/products', productRouter);
  app.get('/', (req, res) => res.send('Hello World'));
}

export const sellersRoutings = (app) => {
  app.use('/api/v1/sellers', sellerRouter);
  app.use(globalError);
  app.get('/', (req, res) => res.send('Hello World'));
}

export const usresRoutings = (app) => {
  app.use('/api/v1/users', userRouter);
  app.use(globalError);
  app.get('/', (req, res) => res.send('Hello World'));
}