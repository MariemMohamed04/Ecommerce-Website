import express from 'express';
import { dbConnection } from './database/dbConnection.js';
import productRouter from './src/modules/Product/product.routes.js';
const app = express();
const port = 3000;

app.use(express.json());
app.get('/', (req, res) => res.send('Hello World!'));
app.use(productRouter);

dbConnection();

app.listen(port, () => console.log(`Server is listening on port ${port}!`));