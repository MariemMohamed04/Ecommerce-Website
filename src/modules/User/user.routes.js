import express from "express";
import { signup } from "./user.controller.js";
import { checkEmail } from "../../middleware/checkEmail.js";

const userRouter = express.Router();
userRouter.post('/signup', checkEmail, signup);

export default userRouter;