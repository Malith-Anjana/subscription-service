import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../config/env.js";
import User from "../models/user.models.js";

const authenticate = async (req, res, next) => {
  try {
    let token;

    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith("Bearer")
    ) {
      token = req.headers.authorization.split(" ")[1];
    }

    if (!token)
      res.status(401).send({ success: false, message: "Unauthorized" });

    const decoded = jwt.verify(token, JWT_SECRET);

    const user = await User.findById(decoded.userId);
    if (!user)
      return res.status(401).send({ success: false, message: "Unauthorized" });
    req.user = user;
    next();
  } catch (error) {
    res
      .status(401)
      .json({ success: false, message: "Unauthorized", error: error.message });
  }
};

const authorize = (roles = []) => {
  return async (req, res, next) => {
    try {
      if (!roles.includes(req.user.role))
        return res.status(401).send({
          success: false,
          message: "You are not allowed for this action",
        });
      next();
    } catch (error) {
      res.status(401).json({
        success: false,
        message: "You are not allowed for this action",
        error: error.message,
      });
    }
  };
};

export { authenticate, authorize };
