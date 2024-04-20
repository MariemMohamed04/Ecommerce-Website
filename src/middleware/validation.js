import { AppError } from "../utils/appError.js";

export const validation = (schema) => {
  return (req, res, next) => {
    const { error } = schema.validate({
      ...req.body,
      ...req.params
    });
    if (error) {
      let errorList = [];
      error.details.forEach(val => {
        errorList.push(val.message);
      });
      return next(new AppError(errorList, 400));
    }
    next();
  }
}
