import { Router } from "express";
import { getUser, getUsers } from "../controllers/user.controllers.js";
import { authenticate, authorize } from "../middlewares/auth.middleware.js";

const userRouter = Router();

userRouter.get("/", authenticate, authorize(["admin"]), getUsers);
userRouter.get("/:id", authenticate, authorize([" admin"]), getUser);

userRouter.post("/", async (req, res) => {
  res.send({ title: "Create a user" });
});

userRouter.put("/:id", async (req, res) => {
  res.send({ title: "update user" });
});

userRouter.delete("/:id", async (req, res) => {
  res.send({ title: "delete user" });
});

export default userRouter;
