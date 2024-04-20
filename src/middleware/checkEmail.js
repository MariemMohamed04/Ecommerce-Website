import bcrypt from "bcrypt";
import { userModel } from "../../database/models/user.model.js";

export const checkEmail = async(req, res, next) => {
  req.body.password = bcrypt.hashSync(req.body.password, 8);
  let user = await userModel.findOne({
    email: req.body.email
  });
  if (user) {
    return res.json({
      message: "Email already Exists."
    });
  }
};







