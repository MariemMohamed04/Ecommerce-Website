import express from 'express';
import { dbConnection } from './database/dbConnection.js';
// import productRouter from './src/modules/Product/product.routes.js';
import { productsRoutings, sellersRoutings } from './src/modules/index.routes.js';
const app = express();
const port = 3000;

app.use(express.json());
// app.get('/', (req, res) => res.send('Hello World!'));
// app.use('/api/v1/products', productRouter);
productsRoutings(app);
sellersRoutings(app);
dbConnection();

app.listen(port, () => console.log(`Server is listening on port ${port}!`));