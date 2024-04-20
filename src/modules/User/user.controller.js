import { userModel } from "../../../database/models/user.model.js";
// import { bcrypt } from "bcrypt";

const signup = async (req, res) => {
  await userModel.insertMany(req.body);
  res.json({
    message: "Success"
  });
}

export {
  signup
}