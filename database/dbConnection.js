import mongoose from "mongoose";


export const dbConnection = () => {
  mongoose.connect('mongodb://127.0.0.1:27017/Ecommerce')
  .then(() => {
    console.log("Connected ✔");
  }).catch((err) => {
    console.log("Error ❌", err);
  })
}